import * as CSS from 'csstype'

import { generateId } from '../../shared/utils'
import { Factions, GameTypes } from '../Game'

export class Player implements GameTypes.Player {
  name: string
  color: CSS.Property.Color
  faction: GameTypes.Faction

  id = generateId()

  constructor(
    name: string,
    color: CSS.Property.Color,
    factionName: GameTypes.FactionName
  ) {
    const faction = Factions[factionName]

    this.name = name
    this.color = color
    this.faction = faction
  }
}
