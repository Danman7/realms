import * as CSS from 'csstype'

import { IconName } from 'asset/iconNames'
export interface Faction {
  name: string
  icon: IconName
}

export interface Player {
  id: string
  name: string
  color: CSS.Property.Color
  faction: Faction
}

export interface Region {
  id: number
  name: string
  units: Unit[]
  owner?: Player
}

export interface UnitTrait {
  name: string
  description: string
  icon: IconName
}
export interface UnitStats {
  strength: number
  charge?: number
  traits?: UnitTrait[]
}

export interface UnitBase {
  name: string
  icon: IconName
  stats: UnitStats
}
export interface Unit extends UnitBase {
  id: string
  player: Player
  current: UnitStats
}
