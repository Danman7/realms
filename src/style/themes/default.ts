import { rem, transparentize } from 'polished'

import { Theme } from './types'

export const defaultTheme: Theme = {
  colors: {
    primary: '#ffd700',
    secondary: '#ae00ff',
    gray: '#999',
    success: '#5cb85c',
    danger: '#d9534f',
    text: transparentize(0.2, '#322'),
    border: transparentize(0.9, '#000'),
    background: '#fff9f9',
    'map-land': '#82A775',
    'map-region-border': '#64513B',
    'map-shoreline': '#1f3846',
  },
  boxShadow: '2px 8px 8px -5px rgba(0, 0, 0, 0.3)',
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
    bold: 500,
  },
  animationDuration: '0.2s',
}
