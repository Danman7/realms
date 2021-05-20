import { RenderOptions, render } from '@testing-library/react'
import { FC, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../style/global'
import { defaultTheme } from '../style/themes'

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
