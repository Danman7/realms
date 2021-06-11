import * as CSS from 'csstype'
import { FC } from 'react'

import { IconName } from '../../assets/iconNames'

export interface IconProps {
  name: IconName
  size?: CSS.Property.FontSize
  color?: CSS.Property.Color
}

export const Icon: FC<IconProps> = ({
  name = 'cross-mark',
  size = '1rem',
  color,
}) => {
  return (
    <i
      className={`game-icon game-icon-${name}`}
      data-testid={name}
      style={{ color, fontSize: size }}
    />
  )
}
