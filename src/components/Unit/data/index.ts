import { UnitTypes } from '../../Unit'
import * as UnitTraitsData from './traits'
import * as UnitData from './variants'

const UnitVariants: {
  [name in UnitTypes.UnitName]: UnitTypes.UnitBase
} = UnitData

const UnitTraits: {
  [name in UnitTypes.UnitTraitName]: UnitTypes.UnitTrait
} = UnitTraitsData

export { UnitVariants, UnitTraits }
