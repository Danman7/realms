import { useMachine } from '@xstate/react'
import { FC } from 'react'

import { CenterItems } from '../../style/global'
import { GameTypes } from '../Game'
import { Field } from './components/Field'
import { BattleState } from './types.d'
import { BattlefieldMachine } from '.'

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

  const { value, context } = current

  const invader: GameTypes.Player = units.find(
    (unit) => unit.player !== owner
  ).player

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
        invader={invader}
        battleState={value as BattleState}
        send={send}
      />
    </div>
  )
}
