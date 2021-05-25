import { IconName } from '../../shared/assets/iconNames'
import { generateId } from '../../shared/utils'
import { GameTypes } from '../Game'
import { UnitVariants } from './data'
import { UnitTypes } from '.'

export class Unit implements UnitTypes.Unit {
  name: string
  icon: IconName
  stats: UnitTypes.UnitStats
  current: UnitTypes.UnitStats
  description?: string
  player?: GameTypes.Player

  id = generateId()

  constructor(name: UnitTypes.UnitName, player?: GameTypes.Player) {
    const unit = UnitVariants[name]

    this.name = unit.name
    this.icon = unit.icon
    this.stats = unit.stats
    this.current = unit.stats

    if (unit.description) {
      this.description = unit.description
    }

    if (player) {
      this.player = player
    }
  }
}
