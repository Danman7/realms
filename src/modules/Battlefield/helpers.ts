import { GameTypes } from '../Game'
import { UnitTypes } from '../Unit'
import { BattleState } from './types.d'

const { UnitState } = UnitTypes

export const prepareRegionForBattle = (region: GameTypes.BattleRegion) => ({
  ...region,
  units: region.units.map((unit) => ({
    ...unit,
    state: UnitTypes.UnitState.RESERVE,
  })),
})

export const getActivePlayerId = (
  battleState: BattleState,
  owner: GameTypes.Player,
  invader: GameTypes.Player
): string => {
  if (battleState === BattleState.INVADER_PLAYS) {
    return invader.id
  }

  if (battleState === BattleState.DEFENDER_PLAYS) {
    return owner.id
  }

  return ''
}

export const getUnitsInCombat = (units: UnitTypes.ActiveUnit[]) =>
  units.filter(
    (unit) =>
      unit.state === UnitState.IN_COMBAT || unit.state === UnitState.PRE_COMBAT
  )

const getCombatStrength = (units: UnitTypes.ActiveUnit[]) =>
  units.reduce((accumulator, currentUnit) => {
    return accumulator + currentUnit.current.strength
  }, 0)

export const getCombatStrengthBallance = (
  units: UnitTypes.ActiveUnit[],
  owner: GameTypes.Player,
  invader: GameTypes.Player
) => {
  const unitsInCombat = getUnitsInCombat(units)

  const invadingStrength = getCombatStrength(
    unitsInCombat.filter((unit) => unit.player.id === invader.id)
  )

  const defendingStrength = getCombatStrength(
    unitsInCombat.filter((unit) => unit.player.id === owner.id)
  )

  return `${invadingStrength} : ${defendingStrength}`
}

export const anyUnitIsInPreCombat = (units: UnitTypes.ActiveUnit[]) =>
  units.some((unit) => unit.state === UnitState.PRE_COMBAT)
