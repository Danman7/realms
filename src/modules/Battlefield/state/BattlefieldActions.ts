import { UnitTypes } from '../../Unit'
import { BattleContext, PlayUnitEvent } from '../types'

export const playUnit = (context: BattleContext, event: PlayUnitEvent) => {
  const { unitId, forceType } = event

  const updatedState = context

  const updatedUnit = updatedState[forceType].units.find(
    (unit) => unit.id === unitId
  )

  if (updatedUnit) {
    updatedUnit.state = UnitTypes.UnitState.IN_COMBAT
  }

  return updatedState
}
