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

export const Charge: UnitTypes.UnitTrait = {
  name: 'Charge',
  description:
    'This unit rusher to combat receiving this amount of bonus to its strength on the first turn it enters combat.',
  icon: 'dodging',
  value: 1,
}

export const Siege: UnitTypes.UnitTrait = {
  name: 'Siege',
  description: 'This is the strength of the unit during siege combat.',
  icon: 'crumbling-ball',
  value: 1,
}
