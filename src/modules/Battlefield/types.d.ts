import { UnitTypes } from '../Unit'

export enum BattleState {
  INVADER_PLAYS = 'invaderPlays',
  DEFENDER_PLAYS = 'defenderPlays',
  RESOLVE = 'resolve',
  END = 'end',
}

export interface BattleStateSchema {
  value: BattleState
  context: BattleContext
  states: {
    invaderPlays: {}
    defenderPlays: {}
    resolve: {}
    end: {}
  }
}

export interface PlayUnitEvent<T> {
  type: 'PLAY_UNIT'
  unitId: string
}

export interface DamageUnitEvent<T> {
  type: 'DAMAGE_UNIT'
  unitId: string
}

export type BattleEvent =
  | { type: 'READY' }
  | { type: 'RETREAT' }
  | { type: 'VICTORY' }
  | PlayUnitEvent
  | DamageUnitEvent

export interface BattleContext {
  units: UnitTypes.ActiveUnit[]
}

export type UnitStateClickHandler = (unit: UnitTypes.ActiveUnit) => void
