import * as CSS from 'csstype'

export const colorNames = [
  'primary',
  'secondary',
  'error',
  'background',
  'surface',
] as const

export const textColorNames = [
  'onPrimary',
  'onSecondary',
  'onError',
  'onBackground',
  'onSurface',
] as const

export const mapColorNames = [
  'mapLand',
  'mapRegionBorder',
  'mapShoreline',
] as const

export type ColorName = typeof colorNames[number]
export type TextColorName = typeof textColorNames[number]
export type MapColorName = typeof mapColorNames[number]

export const elevationLevels = ['1', '2', '3'] as const

export type Elevation = typeof elevationLevels[number]

interface Theme {
  colors: {
    [name in ColorName | TextColorName | MapColorName]: CSS.Property.Color
  }
  fontSizes: string[]
  fontWeights: {
    [name in 'thin' | 'regular' | 'bold']: number
  }
  breakPoints: {
    [name in 'large' | 'medium' | 'small']: number
  }
  gutters: {
    [name in 'medium' | 'small']: number
  }
  elevation: {
    [name in Elevation]: number
  }
  borderRadius: string
}
