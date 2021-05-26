import { GameTypes } from '../Game'
import { BattlefieldTypes } from '.'

export class Battlefield implements BattlefieldTypes.Battlefield {
  regionName: string
  forces: [BattlefieldTypes.Force, BattlefieldTypes.Force]
  activeForce: BattlefieldTypes.ActiveForce

  constructor(region: GameTypes.Region) {
    const { units, owner, invader } = region

    this.regionName = region.name
    this.forces = [
      {
        player: invader,
        units: units.filter((unit) => unit.player === invader),
      },
      {
        player: owner,
        units: units.filter((unit) => unit.player === owner),
        isDefender: true,
      },
    ]
    this.activeForce = BattlefieldTypes.ActiveForce.Invader
  }
}
