import { UnitTypes } from '../Unit'
import { BattleContext, BattleState, ForceType } from './types.d'

const { UnitState } = UnitTypes

export const checkIfIsActiveForceTurn = (
  battleState: BattleState,
  forceType: ForceType
): boolean =>
  (battleState === BattleState.INVADER_PLAYS &&
    forceType === ForceType.INVADER) ||
  (battleState === BattleState.DEFENDER_PLAYS &&
    forceType === ForceType.DEFENDER)

const getCombatStrength = (units: UnitTypes.ActiveUnit[]) =>
  units.reduce((accumulator, currentUnit) => {
    return accumulator + currentUnit.current.strength
  }, 0)

export const getCombatStrengthBallance = (battleContext: BattleContext) => {
  const { invadingForce, defendingForce } = battleContext

  const invadingStrength = getCombatStrength(
    invadingForce.units.filter(
      (unit) =>
        unit.state === UnitState.IN_COMBAT ||
        unit.state === UnitState.PRE_COMBAT
    )
  )

  const defendingStrength = getCombatStrength(
    defendingForce.units.filter(
      (unit) =>
        unit.state === UnitState.IN_COMBAT ||
        unit.state === UnitState.PRE_COMBAT
    )
  )

  return `${invadingStrength} : ${defendingStrength}`
}

export const anyUnitIsInPreCombat = (battleContext: BattleContext) => {
  const { invadingForce, defendingForce } = battleContext

  return (
    invadingForce.units.some((unit) => unit.state === UnitState.PRE_COMBAT) ||
    defendingForce.units.some((unit) => unit.state === UnitState.PRE_COMBAT)
  )
}

export const setCombatUnits = (units: UnitTypes.ActiveUnit[]) =>
  units.map((unit) => {
    if (unit.state === UnitState.PRE_COMBAT) {
      return {
        ...unit,
        state: UnitState.IN_COMBAT,
      }
    }

    return unit
  })
