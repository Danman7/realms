import { Battlefield } from './components/Battlefield'
import { testBattleRegion } from './shared/mocks'

function App() {
  return (
    <div className="App">
      <Battlefield region={testBattleRegion} />
    </div>
  )
}

export default App
