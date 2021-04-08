import { Battlefield } from 'Battlefield'
import { testBattleRegion } from 'mocks'

function App() {
  return (
    <div className="App">
      <Battlefield region={testBattleRegion} />
    </div>
  )
}

export default App
