import { useMachine } from '@xstate/react'
import { FC } from 'react'

import { FlexSection } from '../../style/global'
import { UnitTypes } from '../Unit'
import { BattleTitle, BattlefieldWrapper } from './BattlefieldStyles'
import { Force } from './components/Force'
import {
  BattleState,
  Battlefield,
  ForceType,
  UnitStateClickHandler,
} from './types.d'
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

  const { value } = current

  const handleUnitClick: UnitStateClickHandler = (
    unit: UnitTypes.ActiveUnit,
    forceType: ForceType
  ) => {
    send('PLAY_UNIT', {
      unitId: unit.id,
      forceType,
    })
  }

  return (
    <BattlefieldWrapper>
      <BattleTitle>
        <h1>Battle of {regionName}</h1>
      </BattleTitle>

      <FlexSection>
        <Force
          force={invadingForce}
          onUnitClick={handleUnitClick}
          battleState={value as BattleState}
        />
        <Force
          force={defendingForce}
          onUnitClick={handleUnitClick}
          battleState={value as BattleState}
        />
      </FlexSection>
    </BattlefieldWrapper>
  )
}
