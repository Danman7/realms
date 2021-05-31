import * as CSS from 'csstype'
import { FC } from 'react'

import { IconName } from '../../assets/iconNames'
import { FigureModel, FigureShadow, FigureWrpper } from './FigureStyles'

export interface FigureProps {
  /**
   * Icon name to be uses as figure base.
   */
  icon: IconName
  /**
   * Optional color to be applied to figure.
   */
  color?: CSS.Property.Color
  /**
   * If figure is clickable an on hover effect is applied.
   */
  isClickable?: boolean
}

export const Figure: FC<FigureProps> = ({
  icon = 'cross-mark',
  color = '#999',
  isClickable = false,
}) => {
  return (
    <FigureWrpper aria-label={`${icon}-figure`}>
      <FigureModel
        className={`creature game-icon game-icon-${icon}`}
        color={color}
        isClickable={isClickable}
      />
      <FigureShadow className={`shadow game-icon game-icon-${icon}`} />
    </FigureWrpper>
  )
}
