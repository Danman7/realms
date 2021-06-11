import { FC } from 'react'

import { CenterItems } from '../../../style/global'
import { UnitComponent, UnitTypes } from '../../Unit'
import { UnitStateClickHandler } from '../types.d'

interface ForceProps {
  units: UnitTypes.ActiveUnit[]
  isActive: boolean
  onUnitClick: UnitStateClickHandler
}

export const Force: FC<ForceProps> = ({ units, isActive, onUnitClick }) => {
  return (
    <CenterItems padding={1}>
      {units.map((unit) => (
        <UnitComponent
          key={unit.id}
          unit={unit}
          handleClick={isActive ? (unit) => onUnitClick(unit) : null}
        />
      ))}
    </CenterItems>
  )
}
