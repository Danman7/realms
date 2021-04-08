import * as CSS from 'csstype'
import { DataTypes, Factions, Units } from 'data'
import { GameTypes } from 'Game'
import randomize from 'randomatic'

export const generateId = () => randomize('Aa0', 10)

export const generateArrayFromNumber = (number: number) => [...Array(number)]

export const scrollToElement = (id: string, isSmooth?: boolean) => {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({
      behavior: isSmooth ? 'smooth' : 'auto',
      block: 'center',
      inline: 'center',
    })
  }
}

export const getRandomNumber = (minimum: number, maximum: number): number =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

export const createPlayer = (
  name: string,
  color: CSS.Property.Color,
  factionName: DataTypes.FactionName
): GameTypes.Player => {
  const faction = Factions[factionName]

  return {
    id: generateId(),
    color,
    name,
    faction,
  }
}

export const createUnit = (
  name: DataTypes.UnitName,
  player: GameTypes.Player
): GameTypes.Unit => {
  const unit = Units[name]

  return {
    ...unit,
    id: generateId(),
    current: unit.stats,
    player,
  }
}
