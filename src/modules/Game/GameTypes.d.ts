import * as CSS from 'csstype'

import { IconName } from 'asset/iconNames'
import { UnitTypes } from 'Unit'
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
  units: UnitTypes.Unit[]
  owner?: Player
}

export interface BattleRegion extends Region {
  owner: Player
}

export type FactionName = 'Kingdom'
