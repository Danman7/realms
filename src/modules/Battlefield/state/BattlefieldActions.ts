import { UnitTypes } from '../../Unit'
import { setCombatUnits } from '../helpers'
import { BattleContext, PlayUnitEvent } from '../types'

const { UnitState } = UnitTypes

export const playUnit = (context: BattleContext, event: PlayUnitEvent) => {
  const { unitId, forceType } = event

  const updatedState = context

  // return all pre combat units to the reserve
  const forceUnits = updatedState[forceType].units.map((unit) => {
    if (unit.state === UnitState.PRE_COMBAT) {
      unit.state = UnitState.RESERVE
    }
    return unit
  })

  const updatedUnit = forceUnits.find((unit) => unit.id === unitId)

  if (updatedUnit) {
    updatedUnit.state = UnitState.PRE_COMBAT
  }

  return updatedState
}

export const playPhaseReady = (context: BattleContext) => {
  const { invadingForce, defendingForce } = context

  return {
    invadingForce: {
      ...invadingForce,
      units: setCombatUnits(invadingForce.units),
    },
    defendingForce: {
      ...defendingForce,
      units: setCombatUnits(defendingForce.units),
    },
  }
}
