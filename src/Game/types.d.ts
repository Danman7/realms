import * as CSS from 'csstype'

export interface Faction {
  name: string
}

export interface Player {
  id: number
  name: string
  color: CSS.Property.Color
  faction: Faction
}
