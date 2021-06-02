import { UnitBase } from '../types.d'
import * as UnitTraits from './traits'

export const Pikemen: UnitBase = {
  name: 'Pikemen',
  icon: 'pikeman',
  stats: {
    strength: 1,
    traits: [UnitTraits.Spears],
  },
  description:
    "They don't have much of a training, but bunch them up together, point their spears forward and few charging enemies will survive.",
}

export const Knights: UnitBase = {
  name: 'Mounted Knights',
  icon: 'mounted-knight',
  stats: {
    strength: 2,
    traits: [UnitTraits.Charge, UnitTraits.Flank],
  },
}
