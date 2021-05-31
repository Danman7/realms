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

/**
 * Game-ready unit.
 * @extends {UnitBase}
 */
export interface Unit extends UnitBase {
  /**
   * Unique identifier.
   */
  readonly id: string
  /**
   * Any changes to the unit's stats happen here.
   * The stats prop is held for reference.
   */
  current: UnitStats
  /**
   * Holds the unit's owner data,
   * if it has an owner.
   */
  player?: GameTypes.Player
}

export type UnitName = 'Pikemen' | 'Knights'

export type UnitTraitName = 'Spears' | 'Flank' | 'Charge' | 'Siege'
