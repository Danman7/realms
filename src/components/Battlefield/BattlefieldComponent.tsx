import { FC } from 'react'

import { Icon } from '../../shared/components/Icon'
import { GameTypes } from '../Game'
import { UnitComponent } from '../Unit'
import {
  BattleTitle,
  BattlefieldSection,
  BattlefieldWrapper,
  Grounds,
  PlayerNames,
} from './BattlefieldStyles'

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

  return (
    <BattlefieldWrapper>
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
              <UnitComponent key={unit.id} data={unit} />
            ))}
        </BattlefieldSection>
        <BattlefieldSection>
          {units
            .filter((unit) =>
              players[1] ? unit.player === players[1] : !unit.player
            )
            .map((unit) => (
              <UnitComponent key={unit.id} data={unit} />
            ))}
        </BattlefieldSection>
      </Grounds>
    </BattlefieldWrapper>
  )
}
