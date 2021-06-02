import { FC } from 'react'

import { activeIcon } from '../../../constants'
import { Icon } from '../../../shared/components/Icon'
import { UnitComponent, UnitTypes } from '../../Unit'
import { ArmyWrapper, ForceWrapper } from '../BattlefieldStyles'
import { checkIfIsActiveForceTurn } from '../helpers'
import { BattleState, ForceType, UnitStateClickHandler } from '../types.d'
import { BattlefieldTypes } from '..'

interface ForceProps {
  force: BattlefieldTypes.Force
  battleState: BattleState
  onUnitClick: UnitStateClickHandler
}

export const Force: FC<ForceProps> = ({ force, battleState, onUnitClick }) => {
  const { player, units, type } = force

  const isActiveTurn = checkIfIsActiveForceTurn(battleState, force.type)

  return (
    <ForceWrapper isDefender={type === ForceType.DEFENDER}>
      <div>
        {!!player ? (
          <h2 style={{ color: player.color }}>
            <Icon name={player.faction.icon} /> <span>{player.name}</span>
            {isActiveTurn ? <Icon name={activeIcon} /> : null}
          </h2>
        ) : (
          <h2>Local Garrison</h2>
        )}
      </div>
      <ArmyWrapper>
        <div>
          {units
            .filter((unit) => unit.state === UnitTypes.UnitState.RESERVE)
            .map((unit) => (
              <UnitComponent
                key={unit.id}
                unit={unit}
                handleClick={
                  isActiveTurn ? (unit) => onUnitClick(unit, force.type) : null
                }
              />
            ))}
        </div>
        <div>
          {units
            .filter(
              (unit) =>
                unit.state === UnitTypes.UnitState.IN_COMBAT ||
                unit.state === UnitTypes.UnitState.PRE_COMBAT
            )
            .map((unit) => (
              <UnitComponent key={unit.id} unit={unit} />
            ))}
        </div>
      </ArmyWrapper>
    </ForceWrapper>
  )
}
