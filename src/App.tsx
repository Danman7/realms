import { Battlefield, BattlefieldView } from './modules/Battlefield'
import { testBattleRegion } from './shared/mocks'

function App() {
  return (
    <div className="App">
      <BattlefieldView battlefield={new Battlefield(testBattleRegion)} />
    </div>
  )
}

export default App
