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

export type PlayUnitEvent = {
  type: 'PLAY_UNIT'
  unitId: string
}

export type BattleEvent =
  | { type: 'READY' }
  | { type: 'RETREAT' }
  | { type: 'VICTORY' }
  | PlayUnitEvent

export interface BattleContext {
  units: UnitTypes.ActiveUnit[]
}

export type UnitStateClickHandler = (unit: UnitTypes.ActiveUnit) => void
