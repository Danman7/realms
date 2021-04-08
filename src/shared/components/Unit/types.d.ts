import { GameTypes } from 'Game'

export interface UnitProps {
  /**
   * Holds all gameplay information about the unit.
   */
  data: GameTypes.Unit
  /**
   * Optional click handler.
   */
  handleClick?: (unit: GameTypes.Unit) => void
}
