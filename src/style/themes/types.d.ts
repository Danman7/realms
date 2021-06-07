import * as CSS from 'csstype'

export const colorNames = [
  'primary',
  'secondary',
  'gray',
  'success',
  'danger',
] as const
export type ColorName = typeof colorNames[number]

interface Theme {
  colors: {
    [name in
      | ColorName
      | 'text'
      | 'border'
      | 'background'
      | 'map-land'
      | 'map-region-border'
      | 'map-shoreline']: CSS.Property.Color
  }
  fontSizes: string[]
  fontWeights: {
    [name in 'thin' | 'regular' | 'bold']: number
  }
  boxShadow: CSS.Property.BoxShadow
  animationDuration: CSS.Property.AnimationDuration
}
