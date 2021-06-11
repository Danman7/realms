import { FC } from 'react'

import { playerBattleTurnMsg } from '../../../constants'
import { Button } from '../../../shared/components/Button'
import { CenterItems } from '../../../style/global'
import { GameTypes } from '../../Game'
import { UnitTypes } from '../../Unit'
import { FieldLine, FieldWrapper } from '../BattlefieldStyles'
import { anyUnitIsInPreCombat, getActivePlayer } from '../helpers'
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
    <FieldWrapper>
      <CenterItems>
        <div
          style={{ color: activePlayer?.color }}
        >{`${activePlayer?.name} ${playerBattleTurnMsg}`}</div>
      </CenterItems>
      <Force
        units={units.filter((unit) => unit.player.id !== owner.id)}
        onUnitClick={handleUnitClick}
        isActive={activePlayer?.id === invader.id}
      />
      <div style={{ color: invader.color }}>{invader.name}</div>
      <FieldLine />
      <div style={{ color: owner.color }}>{owner.name}</div>
      <Force
        units={units.filter((unit) => unit.player.id === owner.id)}
        isActive={activePlayer?.id === owner.id}
        onUnitClick={handleUnitClick}
      />
      <div>
        {anyUnitIsInPreCombat(units) ? (
          <Button
            icon="check-mark"
            onClick={handleClickReady}
            label="I am ready"
            color="success"
          />
        ) : null}
      </div>
    </FieldWrapper>
  )
}
