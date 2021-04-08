import { render, screen } from '@testing-library/react'
import { testUnit1 } from 'mocks'
import { defaultTheme } from 'style/themes'
import { ThemeProvider } from 'styled-components'

import { Unit } from './view'

describe('Battlefield PvP view', () => {
  it('should render figure representing unit', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Unit data={testUnit1} />
      </ThemeProvider>
    )
    expect(screen.getAllByLabelText('pikeman-figure')).toHaveLength(1)
  })
})
