import '../src/shared/assets/icons.css'

import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src/style/global'
import { defaultTheme } from '../src/style/themes'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Design System', 'Components'],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
