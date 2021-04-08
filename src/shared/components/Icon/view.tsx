import * as CSS from 'csstype'
import { FC } from 'react'

import { IconName } from '../../../asset/iconNames'

export interface IconProps {
  /**
   * Icon name.
   */
  name: IconName
  /**
   * Option color to be applied over the text color.
   */
  color?: CSS.Property.Color
}

export const Icon: FC<IconProps> = ({ name, color }) => {
  return <i className={`game-icon game-icon-${name}`} style={{ color }} />
}
