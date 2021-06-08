import { FC } from 'react'

import { playerBattleTurnMsg } from '../../../constants'
import { Button } from '../../../shared/components/Button'
import { CenterItems, FlexSection } from '../../../style/global'
import { GameTypes } from '../../Game'
import { UnitTypes } from '../../Unit'
import { ActionsWrapper } from '../BattlefieldStyles'
import {
  anyUnitIsInPreCombat,
  getActivePlayer,
  getCombatStrengthBallance,
} from '../helpers'
import { BattleState, UnitStateClickHandler } from '../types.d'
import { Force } from './Force'

interface BattlefieldProps {
  battleState: BattleState
  units: UnitTypes.ActiveUnit[]
  owner: GameTypes.Player
  invader: GameTypes.Player
  send: any // literally no clue how to define this
}

export const Field: FC<BattlefieldProps> = ({
  units,
  battleState,
  send,
  owner,
  invader,
}) => {
  const activePlayer = getActivePlayer(battleState, owner, invader)

  const handleUnitClick: UnitStateClickHandler = (
    unit: UnitTypes.ActiveUnit
  ) => {
    if (
      battleState === BattleState.INVADER_PLAYS ||
      battleState === BattleState.DEFENDER_PLAYS
    ) {
      send('PLAY_UNIT', {
        unitId: unit.id,
      })
    }

    if (battleState === BattleState.RESOLVE) {
      send('DAMAGE_UNIT', {
        unitId: unit.id,
      })
    }
  }

  const handleClickReady = () => send('READY')

  return (
    <>
      <CenterItems>
        <h4>{getCombatStrengthBallance(units, owner, invader)}</h4>
      </CenterItems>
      <CenterItems>
        <h5
          style={{ color: activePlayer?.color }}
        >{`${activePlayer?.name} ${playerBattleTurnMsg}`}</h5>
      </CenterItems>
      <FlexSection>
        <Force
          units={units.filter((unit) => unit.player.id !== owner.id)}
          player={invader}
          onUnitClick={handleUnitClick}
          isActive={activePlayer?.id === invader.id}
        />
        <Force
          units={units.filter((unit) => unit.player.id === owner.id)}
          player={owner}
          isActive={activePlayer?.id === owner.id}
          isDefender
          onUnitClick={handleUnitClick}
        />
      </FlexSection>
      <ActionsWrapper>
        {anyUnitIsInPreCombat(units) ? (
          <Button
            icon="check-mark"
            onClick={handleClickReady}
            label="I am ready"
            color="success"
          />
        ) : null}
      </ActionsWrapper>
    </>
  )
}
