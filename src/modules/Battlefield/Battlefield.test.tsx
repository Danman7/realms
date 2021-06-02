import { activeIcon } from '../../constants'
import { testBattleRegion, testPlayer1, testPlayer2 } from '../../shared/mocks'
import { render, screen } from '../../shared/test-utils'
import { Battle, BattlefieldContainer } from '.'

describe('Battlefield view', () => {
  beforeEach(() =>
    render(<BattlefieldContainer battlefield={new Battle(testBattleRegion)} />)
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

  it('should show which player is active', () => {
    expect(screen.getByTestId(activeIcon)).toBeInTheDocument()
  })
})
