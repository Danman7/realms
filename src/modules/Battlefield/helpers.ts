import { BattleState, ForceType } from './types.d'

export const checkIfIsActiveForceTurn = (
  battleState: BattleState,
  forceType: ForceType
): boolean =>
  (battleState === BattleState.INVADER_PLAYS &&
    forceType === ForceType.INVADER) ||
  (battleState === BattleState.DEFENDER_PLAYS &&
    forceType === ForceType.DEFENDER)
