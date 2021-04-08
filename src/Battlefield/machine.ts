import { GameTypes } from 'Game'
import { Machine } from 'xstate'

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
  attacker: GameTypes.Unit
  defender: GameTypes.Unit
}

interface BattleContext {
  activePlayerId?: GameTypes.Player['id']
  selectedUnitId?: GameTypes.Unit['id']
  invadingUnits: GameTypes.Unit[]
  defendingUnits: GameTypes.Unit[]
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
