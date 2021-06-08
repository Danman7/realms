import { GameTypes } from 'Game'
import { IconName } from '../../shared/assets/iconNames'

export interface UnitTrait {
  name: string
  description: string
  icon: IconName
  value?: number
}

export interface UnitStats {
  strength: number
  traits?: UnitTrait[]
}

export interface UnitBase {
  name: string
  icon: IconName
  stats: UnitStats
  description?: string
}

export enum UnitState {
  IDLE = 'idle',
  RESERVE = 'in reserve',
  PRE_COMBAT = 'about to enter combat',
  IN_COMBAT = 'in combat',
  RETREATING = 'retreating',
  DISBANDED = 'disbanded',
}

export interface ActiveUnit extends UnitBase {
  readonly id: string
  current: UnitStats
  state: UnitState
  player: GameTypes.Player
}

export type UnitClickHandler = (unit: ActiveUnit) => void

export type UnitName = 'Pikemen' | 'Knights'

export type UnitTraitName = 'Spears' | 'Flank' | 'Charge' | 'Siege'
