import * as UnitTraits from './traits'
import { UnitTypes } from '..'

export const Pikemen: UnitTypes.UnitBase = {
  name: 'Pikemen',
  icon: 'pikeman',
  stats: {
    strength: 1,
    traits: [UnitTraits.Spears],
  },
  description:
    "They don't have much of a training, but bunch them up together, point their spears forward and few charging enemies will survive.",
}

export const Knights: UnitTypes.UnitBase = {
  name: 'Mounted Knights',
  icon: 'mounted-knight',
  stats: {
    strength: 2,
    traits: [UnitTraits.Charge, UnitTraits.Flank],
  },
}
