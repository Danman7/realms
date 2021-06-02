import { UnitTypes } from '../../Unit'
import { UnitBase, UnitTrait } from '../types.d'
import * as UnitTraitsData from './traits'
import * as UnitData from './variants'

const UnitVariants: {
  [name in UnitTypes.UnitName]: UnitBase
} = UnitData

const UnitTraits: {
  [name in UnitTypes.UnitTraitName]: UnitTrait
} = UnitTraitsData

export { UnitVariants, UnitTraits }
