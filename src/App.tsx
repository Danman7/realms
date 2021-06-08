import { BattlefieldContainer, BattlefieldHelpers } from './modules/Battlefield'
import { testBattleRegion } from './shared/mocks'

function App() {
  return (
    <div className="App">
      <BattlefieldContainer
        region={BattlefieldHelpers.prepareRegionForBattle(testBattleRegion)}
      />
    </div>
  )
}

export default App
