import * as CSS from 'csstype'
import { FC } from 'react'

import { IconName } from '../../assets/iconNames'
import { FigureModel, FigureShadow, FigureWrpper } from './FigureStyles'

export interface FigureProps {
  icon: IconName
  color?: CSS.Property.Color
  isClickable?: boolean
}

export const Figure: FC<FigureProps> = ({
  icon = 'cross-mark',
  color = '#999',
  isClickable = false,
}) => {
  return (
    <FigureWrpper aria-label={`${icon}-figure`} isClickable={isClickable}>
      <FigureModel
        className={`creature game-icon game-icon-${icon}`}
        color={color}
      />
      <FigureShadow className={`shadow game-icon game-icon-${icon}`} />
    </FigureWrpper>
  )
}
