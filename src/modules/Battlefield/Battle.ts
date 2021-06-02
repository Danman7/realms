import { GameTypes } from '../Game'
import { UnitTypes } from '../Unit'
import { Battlefield, Force, ForceType } from './types.d'

export class Battle implements Battlefield {
  regionName: string
  invadingForce: Force
  defendingForce: Force

  constructor(region: GameTypes.Region) {
    const { units, owner, invader } = region

    this.regionName = region.name
    this.invadingForce = {
      player: invader,
      units: units
        .filter((unit) => unit.player === invader)
        .map((unit) => ({ ...unit, state: UnitTypes.UnitState.RESERVE })),
      type: ForceType.INVADER,
    }

    this.defendingForce = {
      player: owner,
      units: units
        .filter((unit) => unit.player === owner)
        .map((unit) => ({ ...unit, state: UnitTypes.UnitState.RESERVE })),
      type: ForceType.DEFENDER,
    }
  }
}
