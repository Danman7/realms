import { GameTypes } from 'Game'

import * as FactionData from './factions'
import * as DataTypes from './types.d'
import * as UnitData from './units'
import * as UnitTraitsData from './unitTraits'

const Units: { [name in DataTypes.UnitName]: GameTypes.UnitBase } = UnitData

const UnitTraits: {
  [name in DataTypes.UnitTraitName]: GameTypes.UnitTrait
} = UnitTraitsData

const Factions: {
  [name in DataTypes.FactionName]: GameTypes.Faction
} = FactionData

export { Factions, Units, UnitTraits, DataTypes }
