import { UnitTypes } from '..'

export const Spears: UnitTypes.UnitTrait = {
  name: 'Spears',
  description:
    "Allow this unit to cancel a single enemy's charge bonus per turn.",
  icon: 'spears',
}

export const Flank: UnitTypes.UnitTrait = {
  name: 'Flanking',
  description:
    'This unit can flank the enemy formations and hit supporting units directly.',
  icon: 'return-arrow',
}
