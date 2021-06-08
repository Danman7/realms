import { FC } from 'react'

import { Icon } from '../../../shared/components/Icon'
import { GameTypes } from '../../Game'
import { UnitComponent, UnitTypes } from '../../Unit'
import { ArmyWrapper, ForceWrapper } from '../BattlefieldStyles'
import { BattleState, UnitStateClickHandler } from '../types.d'

interface ForceProps {
  units: UnitTypes.ActiveUnit[]
  isActive: boolean
  player: GameTypes.Player
  isDefender?: boolean
  onUnitClick: UnitStateClickHandler
}

export const Force: FC<ForceProps> = ({
  units,
  player,
  isActive,
  isDefender,
  onUnitClick,
}) => {
  const DynamicHeading = isActive ? 'h2' : 'h3'

  return (
    <ForceWrapper isDefender={isDefender}>
      <DynamicHeading style={{ color: player.color }}>
        <Icon name={player.faction.icon} /> <span>{player.name}</span>
      </DynamicHeading>
      <ArmyWrapper>
        <div>
          {units
            .filter((unit) => unit.state === UnitTypes.UnitState.RESERVE)
            .map((unit) => (
              <UnitComponent
                key={unit.id}
                unit={unit}
                handleClick={isActive ? (unit) => onUnitClick(unit) : null}
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
