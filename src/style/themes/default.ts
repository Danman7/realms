import { rem } from 'polished'

import { Theme } from './types'

export const defaultTheme: Theme = {
  colors: {
    primary: '#334955',
    secondary: '#f9aa33',
    error: '#F93441',
    background: '#ecf0f2',
    surface: '#fff',
    onPrimary: '#fff',
    onSecondary: '#000',
    onError: '#000',
    onBackground: '#000',
    onSurface: '#000',
    mapLand: '#82A775',
    mapRegionBorder: '#64513B',
    mapShoreline: '#1f3846',
  },
  fontSizes: [
    rem('12.80px'),
    rem('16px'),
    rem('20px'),
    rem('25px'),
    rem('31.25px'),
    rem('39.06px'),
    rem('48.83px'),
  ],
  fontWeights: {
    thin: 300,
    regular: 400,
    bold: 600,
  },
  breakPoints: {
    large: 1240,
    medium: 905,
    small: 600,
  },
  gutters: {
    medium: 32,
    small: 16,
  },
  borderRadius: '4px',
  elevation: {
    '1': 2,
    '2': 6,
    '3': 12,
  },
}
