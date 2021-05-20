import { Machine } from 'xstate'

import { GameTypes } from '../Game'
import { UnitTypes } from '../Unit'

interface BattleStateSchema {
  states: {
    planning: {}
    combat: {}
    resolved: {}
  }
}

type BattleEvent =
  | { type: 'ATTACK' }
  | { type: 'CONTINUE' }
  | { type: 'RESOLVE' }

interface BattleEngagement {
  attacker: UnitTypes.Unit
  defender: UnitTypes.Unit
}

interface BattleContext {
  activePlayerId?: GameTypes.Player['id']
  selectedUnitId?: UnitTypes.Unit['id']
  invadingUnits: UnitTypes.Unit[]
  defendingUnits: UnitTypes.Unit[]
  engagements: BattleEngagement[]
}

export const BattleMachine = Machine<
  BattleContext,
  BattleStateSchema,
  BattleEvent
>({
  id: 'battle',
  initial: 'planning',
  context: {
    invadingUnits: [],
    defendingUnits: [],
    engagements: [],
  },
  states: {
    planning: {
      on: {
        ATTACK: 'combat',
      },
    },
    combat: {
      on: {
        CONTINUE: 'planning',
        RESOLVE: 'resolved',
      },
    },
    resolved: {
      type: 'final',
    },
  },
})
