import { assign, createMachine } from 'xstate'

import { BattleContext, BattleEvent, BattleStateSchema } from '../types.d'
import { playPhaseReady, playUnit } from './BattlefieldActions'

export const BattlefieldMachine = createMachine<
  BattleContext,
  BattleEvent,
  BattleStateSchema
>({
  id: 'battlefield',
  initial: 'invaderPlays',
  context: {
    units: [],
  },
  states: {
    invaderPlays: {
      on: {
        PLAY_UNIT: {
          actions: assign((context, event) => playUnit(context, event)),
        },
        READY: {
          target: 'defenderPlays',
          actions: assign((context) => playPhaseReady(context)),
        },
        RETREAT: { target: 'end' },
      },
    },
    defenderPlays: {
      on: {
        PLAY_UNIT: {
          actions: assign((context, event) => playUnit(context, event)),
        },
        READY: {
          target: 'resolve',
          actions: assign((context) => playPhaseReady(context)),
        },
        RETREAT: { target: 'end' },
      },
    },
    resolve: {
      on: {
        READY: { target: 'invaderPlays' },
        VICTORY: { target: 'end' },
      },
    },
    end: {
      type: 'final',
    },
  },
})
