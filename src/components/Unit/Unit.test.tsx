import { testPlayer1, testUnit1, testUnit2 } from '../../shared/mocks'
import { render, screen } from '../../shared/test-utils'
import { Unit, UnitComponent } from './'

describe('Unit class', () => {
  it('should create a new neutral unit', () => {
    const unit = new Unit('Pikemen')

    expect(unit).toHaveProperty('id')
    expect(unit).toHaveProperty('name', 'Pikemen')
    expect(unit).toHaveProperty('stats.strength', 1)
    expect(unit.stats.traits).toHaveLength(1)
  })
  it('should create a new owned unit', () => {
    const unit = new Unit('Knights', testPlayer1)

    expect(unit).toHaveProperty('id')
    expect(unit).toHaveProperty('player.name', 'Grog the Great')
    expect(unit).toHaveProperty('player.faction.name', 'Kingdom')
  })
})

describe('<UnitComponent />', () => {
  it('should render a figure representing unit', () => {
    render(<UnitComponent data={testUnit1} />)
    expect(screen.getAllByLabelText('pikeman-figure')).toHaveLength(1)
  })

  it('should render the units stats and traits', () => {
    render(
      <>
        <UnitComponent data={testUnit1} />
        <UnitComponent data={testUnit2} />
      </>
    )
    expect(screen.getByLabelText('Long Reach')).toBeInTheDocument()
    expect(screen.getByLabelText('Flanking')).toBeInTheDocument()
  })
})
