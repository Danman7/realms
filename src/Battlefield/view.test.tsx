import { render, screen } from '@testing-library/react'
import { testBattleRegion, testPlayer1, testPlayer2 } from 'mocks'
import { defaultTheme } from 'style/themes'
import { ThemeProvider } from 'styled-components'

import { Battlefield } from './view'

describe('Battlefield PvP view', () => {
  beforeEach(() =>
    render(
      <ThemeProvider theme={defaultTheme}>
        <Battlefield region={testBattleRegion} />
      </ThemeProvider>
    )
  )

  it('should render region name', () => {
    expect(
      screen.getByText(`Battle of ${testBattleRegion.name}`)
    ).toBeInTheDocument()
  })

  it('should render the player names', () => {
    expect(screen.getByText(testPlayer1.name)).toBeInTheDocument()
    expect(screen.getByText(testPlayer2.name)).toBeInTheDocument()
  })

  it('should render the two armies', () => {
    expect(screen.getAllByLabelText('Pikemen')).toHaveLength(2)
    expect(screen.getAllByLabelText('Mounted Knights')).toHaveLength(2)
  })
})
