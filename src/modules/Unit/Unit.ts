import { IconName } from '../../shared/assets/iconNames'
import { generateId } from '../../shared/utils'
import { GameTypes } from '../Game'
import { UnitVariants } from './data'
import { ActiveUnit, UnitName, UnitState, UnitStats } from './types.d'

export class Unit implements ActiveUnit {
  name: string
  icon: IconName
  stats: UnitStats
  current: UnitStats
  state: UnitState
  player: GameTypes.Player
  description?: string

  id = generateId()

  constructor(name: UnitName, player: GameTypes.Player) {
    const unit = UnitVariants[name]

    this.name = unit.name
    this.icon = unit.icon
    this.stats = unit.stats
    this.current = unit.stats
    this.state = UnitState.IDLE
    this.player = player

    if (unit.description) {
      this.description = unit.description
    }
  }
}
