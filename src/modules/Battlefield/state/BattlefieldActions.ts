import { assign } from 'xstate'

import { UnitTypes } from '../../Unit'
import {
  BattleContext,
  BattleEvent,
  DamageUnitEvent,
  PlayUnitEvent,
} from '../types'

const { UnitState } = UnitTypes

const playUnit = assign(
  (context: BattleContext, event: PlayUnitEvent<BattleEvent>) => {
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
)

const playerReady = assign((context: BattleContext) => {
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
})

const damageUnit = assign(
  (context: BattleContext, event: DamageUnitEvent<BattleEvent>) => {
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
)

export const battlefieldActions = { playUnit, playerReady, damageUnit }
