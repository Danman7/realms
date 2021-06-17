import * as CSS from 'csstype'
import { FC, useContext } from 'react'
import { useSpring } from 'react-spring'
import { ThemeContext } from 'styled-components'

import { animateActiveIcon } from '../../animations'
import { IconName } from '../../assets/iconNames'
import { StyledIcon } from './IconStyle'

export interface IconProps {
  name: IconName
  isActive?: boolean
  size?: CSS.Property.FontSize
  color?: CSS.Property.Color
}

export const Icon: FC<IconProps> = ({
  name = 'cross-mark',
  size = '1rem',
  isActive = false,
  color,
}) => {
  const themeContext = useContext(ThemeContext)
  const { primary, secondary } = themeContext.colors
  const style = useSpring(animateActiveIcon(primary, secondary))

  return (
    <StyledIcon
      style={isActive ? style : {}}
      className={`game-icon game-icon-${name}`}
      data-testid={name}
      color={color}
      size={size}
    />
  )
}
