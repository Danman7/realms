import { useMachine } from '@xstate/react'
import { FC } from 'react'

import { CenterItems } from '../../style/global'
import { BattlefieldWrapper } from './BattlefieldStyles'
import { Field } from './components/Field'
import { BattleState, Battlefield } from './types.d'
import { BattlefieldMachine } from '.'

interface BattlefieldProps {
  battlefield: Battlefield
}

export const BattlefieldContainer: FC<BattlefieldProps> = ({ battlefield }) => {
  const { regionName, invadingForce, defendingForce } = battlefield
  const [current, send] = useMachine(BattlefieldMachine, {
    context: {
      invadingForce,
      defendingForce,
    },
    devTools: true,
  })

  const { value, context } = current

  return (
    <BattlefieldWrapper>
      <CenterItems>
        <h1>Battle of {regionName}</h1>
      </CenterItems>

      <Field
        battleContext={context}
        battleState={value as BattleState}
        send={send}
      />
    </BattlefieldWrapper>
  )
}
