import * as FactionData from './factions'
import { GameTypes } from '..'

const Factions: {
  [name in GameTypes.FactionName]: GameTypes.Faction
} = FactionData

export { Factions }
