import { GameTypes } from 'Game'
import { createPlayer, createUnit } from 'utils'

export const testPlayer1 = createPlayer('Grog the Great', 'purple', 'Kingdom')

export const testPlayer2 = createPlayer('Little Jack', 'orange', 'Kingdom')

export const testUnit1 = createUnit('Pikemen', testPlayer1)

export const testBattleRegion: GameTypes.Region = {
  id: 1,
  name: 'Mossy Rock',
  owner: testPlayer2,
  units: [
    testUnit1,
    createUnit('Knights', testPlayer1),
    createUnit('Pikemen', testPlayer2),
    createUnit('Knights', testPlayer2),
  ],
}
