import { FC } from 'react'

import { UnitComponent, UnitTypes } from '../../Unit'
import { Army, ForceWrapper } from '../BattlefieldStyles'
import { UnitStateClickHandler } from '../types.d'

interface ForceProps {
  units: UnitTypes.ActiveUnit[]
  activePlayerId: string
  isDefending?: boolean
  onUnitClick: UnitStateClickHandler
}

export const Force: FC<ForceProps> = ({
  units,
  activePlayerId,
  isDefending = false,
  onUnitClick,
}) => {
  const { name, color, id } = units[0].player
  const isActive = activePlayerId === id

  return (
    <ForceWrapper reverse={isDefending}>
      <Army>
        {units.map((unit) => (
          <UnitComponent
            key={unit.id}
            unit={unit}
            handleClick={isActive ? (unit) => onUnitClick(unit) : null}
          />
        ))}
      </Army>
      <div style={{ color: color }}>
        {name} <small>{isDefending ? 'defending' : 'invading'}</small>
      </div>
    </ForceWrapper>
  )
}
