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
  options: {
    storySort: {
      order: ['Design System', 'Components'],
    },
  },
}
