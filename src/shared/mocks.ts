import { GameTypes, Player } from '../modules/Game'
import { Unit } from '../modules/Unit'

export const testPlayer1 = new Player('Grog the Great', 'purple', 'Kingdom')

export const testPlayer2 = new Player('Little Jack', 'orange', 'Kingdom')

export const testUnit1 = new Unit('Pikemen', testPlayer1)
export const testUnit2 = new Unit('Knights', testPlayer2)

export const testBattleRegion: GameTypes.Region = {
  id: 1,
  name: 'Mossy Rock',
  invader: testPlayer1,
  owner: testPlayer2,
  units: [
    testUnit1,
    new Unit('Knights', testPlayer1),
    new Unit('Pikemen', testPlayer2),
    testUnit2,
  ],
}
