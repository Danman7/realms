import { FC } from 'react'

import { Button } from '../../../shared/components/Button'
import { CenterItems, FlexSection } from '../../../style/global'
import { UnitTypes } from '../../Unit'
import { ActionsWrapper } from '../BattlefieldStyles'
import { anyUnitIsInPreCombat, getCombatStrengthBallance } from '../helpers'
import {
  BattleContext,
  BattleState,
  ForceType,
  UnitStateClickHandler,
} from '../types.d'
import { Force } from './Force'

interface BattlefieldProps {
  battleContext: BattleContext
  battleState: BattleState
  send: any // literally no clue how to define this
}

export const Field: FC<BattlefieldProps> = ({
  battleContext,
  battleState,
  send,
}) => {
  const { invadingForce, defendingForce } = battleContext

  const handleUnitClick: UnitStateClickHandler = (
    unit: UnitTypes.ActiveUnit,
    forceType: ForceType
  ) => {
    send('PLAY_UNIT', {
      unitId: unit.id,
      forceType,
    })
  }

  const handleClickReady = () => send('READY')

  return (
    <>
      <CenterItems>
        <h4>{getCombatStrengthBallance(battleContext)}</h4>
      </CenterItems>
      <FlexSection>
        <Force
          force={invadingForce}
          onUnitClick={handleUnitClick}
          battleState={battleState as BattleState}
        />
        <Force
          force={defendingForce}
          onUnitClick={handleUnitClick}
          battleState={battleState as BattleState}
        />
      </FlexSection>
      <ActionsWrapper>
        {anyUnitIsInPreCombat(battleContext) ? (
          <Button
            icon="check-mark"
            onClick={handleClickReady}
            label="I am ready"
            color="success"
          />
        ) : null}
      </ActionsWrapper>
    </>
  )
}
