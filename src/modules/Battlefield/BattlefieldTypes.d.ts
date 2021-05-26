import { GameTypes } from '../Game'
import { UnitTypes } from '../Unit'

export interface Force {
  units: UnitTypes.Unit[]
  player?: GameTypes.Player
  isDefender?: boolean
}

export enum ActiveForce {
  Invader,
  Defender,
}

export interface Battlefield {
  regionName: string
  forces: [Force, Force]
  activeForce: ActiveForce
}
