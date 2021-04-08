import { GameTypes } from 'Game'

export const Spears: GameTypes.UnitTrait = {
  name: 'Spears',
  description:
    'Allow this unit to cancel a single enemy charge bonus per turn.',
  icon: 'spears',
}

export const Flank: GameTypes.UnitTrait = {
  name: 'Flanking',
  description:
    'This unit is fast enough to flank the enemy formations and hit supporting units directly.',
  icon: 'return-arrow',
}
