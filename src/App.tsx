import { Battle, BattlefieldContainer } from './modules/Battlefield'
import { testBattleRegion } from './shared/mocks'

function App() {
  return (
    <div className="App">
      <BattlefieldContainer battlefield={new Battle(testBattleRegion)} />
    </div>
  )
}

export default App
