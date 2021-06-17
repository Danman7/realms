import { createMachine } from 'xstate'

import { BattleContext, BattleEvent, BattleStateSchema } from '../types.d'
import { battlefieldActions as actions } from './BattlefieldActions'

export const BattlefieldMachine = createMachine<
  BattleContext,
  BattleEvent,
  BattleStateSchema
>(
  {
    id: 'battlefield',
    initial: 'invaderPlays',
    context: {
      units: [],
    },
    states: {
      invaderPlays: {
        tags: 'plays',
        on: {
          PLAY_UNIT: {
            actions: 'playUnit',
          },
          READY: {
            target: 'defenderPlays',
          },
          RETREAT: { target: 'end' },
        },
        exit: ['playerReady'],
      },
      defenderPlays: {
        tags: 'plays',
        on: {
          PLAY_UNIT: {
            actions: 'playUnit',
          },
          READY: {
            target: 'resolve',
          },
          RETREAT: { target: 'end' },
        },
        exit: ['playerReady'],
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
  },
  {
    actions,
  }
)
