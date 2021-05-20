import * as UnitTraits from './traits'
import { UnitTypes } from '..'

export const Pikemen: UnitTypes.UnitBase = {
  name: 'Pikemen',
  icon: 'pikeman',
  stats: {
    strength: 1,
    traits: [UnitTraits.Reach],
  },
}

export const Knights: UnitTypes.UnitBase = {
  name: 'Mounted Knights',
  icon: 'mounted-knight',
  stats: {
    strength: 2,
    traits: [UnitTraits.Flank],
  },
}
