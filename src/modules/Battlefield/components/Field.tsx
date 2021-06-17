import { FC } from 'react'

import { Button } from '../../../shared/components/Button'
import { CenterItems } from '../../../style/global'
import { GameTypes } from '../../Game'
import { UnitTypes } from '../../Unit'
import { FieldLine } from '../BattlefieldStyles'
import { anyUnitIsInPreCombat } from '../helpers'
import { UnitStateClickHandler } from '../types.d'
import { Force } from './Force'

interface BattlefieldProps {
  units: UnitTypes.ActiveUnit[]
  owner: GameTypes.Player
  activePlayerId: string
  handleUnitClick: UnitStateClickHandler
  handleClickReady: () => void
}

export const Field: FC<BattlefieldProps> = ({
  units,
  owner,
  activePlayerId,
  handleUnitClick,
  handleClickReady,
}) => {
  return (
    <div>
      <Force
        units={units.filter((unit) => unit.player.id !== owner.id)}
        onUnitClick={handleUnitClick}
        activePlayerId={activePlayerId}
      />
      <FieldLine />
      <Force
        units={units.filter((unit) => unit.player.id === owner.id)}
        onUnitClick={handleUnitClick}
        activePlayerId={activePlayerId}
        isDefending
      />
      <CenterItems>
        {anyUnitIsInPreCombat(units) ? (
          <Button
            icon="check-mark"
            onClick={handleClickReady}
            label="I am ready"
          />
        ) : null}
      </CenterItems>
    </div>
  )
}
