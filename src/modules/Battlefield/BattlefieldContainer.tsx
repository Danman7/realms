import { useMachine } from '@xstate/react'
import { FC } from 'react'

import { CenterItems } from '../../style/global'
import { GameTypes } from '../Game'
import { Field } from './components/Field'
import { BattleState, UnitStateClickHandler } from './types.d'
import { BattlefieldMachine } from '.'
import { UnitTypes } from '../Unit'
import { getActivePlayerId } from './helpers'

interface BattlefieldProps {
  region: GameTypes.BattleRegion
}

export const BattlefieldContainer: FC<BattlefieldProps> = ({ region }) => {
  const { name, owner, units } = region
  const [current, send] = useMachine(BattlefieldMachine, {
    context: {
      units: region.units,
    },
    devTools: true,
  })

  const { value, context, tags } = current

  const invader: GameTypes.Player = units.find(
    (unit) => unit.player !== owner
  ).player

  const handleUnitClick: UnitStateClickHandler = (
    unit: UnitTypes.ActiveUnit
  ) => {
    if (tags.has('plays')) {
      send('PLAY_UNIT', {
        unitId: unit.id,
      })
    }

    if (value === BattleState.RESOLVE) {
      send('DAMAGE_UNIT', {
        unitId: unit.id,
      })
    }
  }

  const handleClickReady = () => send('READY')

  const activePlayerId = getActivePlayerId(value as BattleState, owner, invader)

  return !invader ? (
    <h1>This is not a valid battle as there is no invader.</h1>
  ) : (
    <div>
      <CenterItems>
        <h1>Battle of {name}</h1>
      </CenterItems>

      <Field
        units={context.units}
        owner={owner}
        activePlayerId={activePlayerId}
        handleUnitClick={handleUnitClick}
        handleClickReady={handleClickReady}
      />
    </div>
  )
}
