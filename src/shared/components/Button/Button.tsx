import { FC } from 'react'

import { ThemeTypes } from '../../../style/themes'
import { IconName } from '../../assets/iconNames'
import { Icon } from '../Icon'
import { StyledButton } from './ButtonStyles'

export interface ButtonProps {
  /**
   * The text displayed inside the button.
   */
  label: string
  /**
   * Callback function executed on button click.
   */
  onClick: () => void
  /**
   * Optional icon to be inserted before the label.
   */
  icon?: IconName
  /**
   * Optional coloration based on theme colors.
   */
  color?: ThemeTypes.ColorName
}

export const Button: FC<ButtonProps> = ({
  onClick,
  label,
  icon,
  color = 'primary',
}) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {!!icon ? <Icon name={icon} /> : null}
      {label}
    </StyledButton>
  )
}
