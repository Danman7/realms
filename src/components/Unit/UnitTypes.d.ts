import { GameTypes } from 'Game'
import { IconName } from '../../shared/assets/iconNames'

export interface UnitComponentProps {
  data: Unit
  handleClick?: (unit: GameTypes.Unit) => void
}

export interface UnitTrait {
  name: string
  description: string
  icon: IconName
  color?: CSS.Property.Color
}

export interface UnitStats {
  strength: number
  bonus?: {
    charge?: number
    siege?: number
  }
  traits?: UnitTrait[]
}

export interface UnitBase {
  name: string
  icon: IconName
  stats: UnitStats
  description?: string
}

export interface Unit extends UnitBase {
  readonly id: string
  player?: GameTypes.Player
  current: UnitStats
}

export type UnitName = 'Pikemen' | 'Knights'

export type UnitTraitName = 'Spears' | 'Flank'
