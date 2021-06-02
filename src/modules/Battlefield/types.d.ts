import { GameTypes } from '../Game'
import { UnitTypes } from '../Unit'

export enum ForceType {
  INVADER = 'invadingForce',
  DEFENDER = 'defendingForce',
}

export interface Force {
  units: UnitTypes.ActiveUnit[]
  type: ForceType
  player?: GameTypes.Player
}

export interface Battlefield {
  regionName: string
  invadingForce: Force
  defendingForce: Force
}

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
  forceType: ForceType
  unitId: string
}

export type BattleEvent =
  | { type: 'READY' }
  | { type: 'RETREAT' }
  | { type: 'VICTORY' }
  | PlayUnitEvent

export interface BattleContext {
  invadingForce: Force
  defendingForce: Force
  [key: ForceType]: Force
}

export type UnitStateClickHandler = (
  unit: UnitTypes.ActiveUnit,
  force: ForceType
) => void
