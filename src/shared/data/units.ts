import { GameTypes } from 'Game'
import * as UnitTraits from 'shared/data/unitTraits'

export const Pikemen: GameTypes.UnitBase = {
  name: 'Pikemen',
  icon: 'pikeman',
  stats: {
    strength: 1,
    traits: [UnitTraits.Spears],
  },
}

export const Knights: GameTypes.UnitBase = {
  name: 'Mounted Knights',
  icon: 'mounted-knight',
  stats: {
    strength: 2,
    charge: 1,
    traits: [UnitTraits.Flank],
  },
}
