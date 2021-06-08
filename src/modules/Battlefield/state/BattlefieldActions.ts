import { UnitTypes } from '../../Unit'
import { BattleContext, DamageUnitEvent, PlayUnitEvent } from '../types'

const { UnitState } = UnitTypes

export const playUnit = (context: BattleContext, event: PlayUnitEvent) => {
  const { unitId } = event
  const { units } = context

  return {
    units: units.map((unit) => {
      if (unit.id === unitId) {
        return {
          ...unit,
          state: UnitState.PRE_COMBAT,
        }
      }

      if (unit.state === UnitState.PRE_COMBAT) {
        return {
          ...unit,
          state: UnitState.RESERVE,
        }
      }

      return unit
    }),
  }
}

export const playPhaseReady = (context: BattleContext) => {
  const { units } = context

  return {
    units: units.map((unit) => {
      if (unit.state === UnitState.PRE_COMBAT) {
        return {
          ...unit,
          state: UnitState.IN_COMBAT,
        }
      }

      return unit
    }),
  }
}

export const damageUnit = (context: BattleContext, event: DamageUnitEvent) => {
  const { units } = context
  const { unitId } = event

  return {
    units: units.map((unit) => {
      if (unit.id === unitId) {
        const { current } = unit

        return {
          ...unit,
          current: {
            ...current,
            strength: current.strength - 1,
          },
        }
      }

      return unit
    }),
  }
}
