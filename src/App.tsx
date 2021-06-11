import { BattlefieldContainer, BattlefieldHelpers } from './modules/Battlefield'
import { Modal } from './shared/components/Modal'
import { testBattleRegion } from './shared/mocks'

function App() {
  return (
    <div className="App">
      <Modal isOpen>
        <BattlefieldContainer
          region={BattlefieldHelpers.prepareRegionForBattle(testBattleRegion)}
        />
      </Modal>
    </div>
  )
}

export default App
