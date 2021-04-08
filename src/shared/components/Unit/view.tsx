import { FC } from 'react'

import { Figure } from '../Figure'
import { StyledUnit } from './style'
import { UnitProps } from './types'

export const Unit: FC<UnitProps> = ({ data, handleClick }) => {
  const { name, icon, player } = data

  return (
    <StyledUnit
      onClick={handleClick ? () => handleClick(data) : () => {}}
      isClickable={!!handleClick}
      aria-label={name}
    >
      <>
        <Figure icon={icon} color={player?.color} isClickable={!!handleClick} />
      </>
    </StyledUnit>
  )
}
