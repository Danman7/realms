import { Battlefield, BattlefieldView } from './components/Battlefield'
import { testBattleRegion } from './shared/mocks'

function App() {
  return (
    <div className="App">
      <BattlefieldView battlefield={new Battlefield(testBattleRegion)} />
    </div>
  )
}

export default App
