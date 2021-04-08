import { useMachine } from '@xstate/react'
import { GameTypes } from 'Game'
import { FC } from 'react'
import { Icon } from 'shared/components/Icon'
import { Unit } from 'shared/components/Unit'

import { BattleMachine } from './machine'
import { BattleTitle, BattlefieldSection, Grounds, PlayerNames } from './style'

export interface BattlefieldProps {
  region: GameTypes.Region
}

export const Battlefield: FC<BattlefieldProps> = ({ region }) => {
  const { units, name } = region
  const invadingUnits = units.filter((unit) =>
    region.owner ? unit.player !== region.owner : unit.player
  )
  const defendingUnits = units.filter(
    (unit) => unit.player === region.owner || !unit.player
  )

  const players = [invadingUnits[0].player, defendingUnits[0].player]

  const [state, send] = useMachine(BattleMachine, {
    context: {
      invadingUnits,
      defendingUnits,
      activePlayerId: players[0].id,
    },
  })

  return (
    <div>
      <BattleTitle>
        <h1>Battle of {name}</h1>
      </BattleTitle>

      <PlayerNames>
        {players.map((player) => (
          <div key={player.id}>
            <h2 style={{ color: player.color }}>
              <Icon name={player.faction.icon} /> <span>{player.name}</span>
            </h2>
          </div>
        ))}
        {players.length < 2 && <h2>Local Garrison</h2>}
      </PlayerNames>

      <Grounds>
        <BattlefieldSection>
          {units
            .filter((unit) => unit.player === players[0])
            .map((unit) => (
              <Unit key={unit.id} data={unit} />
            ))}
        </BattlefieldSection>
        <BattlefieldSection>
          {units
            .filter((unit) =>
              players[1] ? unit.player === players[1] : !unit.player
            )
            .map((unit) => (
              <Unit key={unit.id} data={unit} />
            ))}
        </BattlefieldSection>
      </Grounds>
    </div>
  )
}
