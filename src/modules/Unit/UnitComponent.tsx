import { FC } from 'react'

import { Figure } from '../../shared/components/Figure'
import { Tooltip } from '../../shared/components/Tooltip'
import { Strength } from './components/Strength'
import { TraitsList } from './components/TraitsList'
import {
  FlavorText,
  StyledUnit,
  TooltipTitle,
  UnitStatsAndTraits,
  UnitWrapper,
} from './UnitStyles'
import { UnitTypes } from '.'

interface UnitComponentProps {
  unit: UnitTypes.Unit
  handleClick?: (unit: UnitTypes.Unit) => void
}

/**
 * Component for displaying a single Unit figure with tooltip.
 *
 * @component
 * @param {UnitTypes.Unit}  unit - Raw unit data.
 * @param handleClick - Optional on click handler that receives the unit data.
 * @example
 * <UnitComponent unit={new Unit('Pikemen', player1) />
 */
export const UnitComponent: FC<UnitComponentProps> = ({
  unit,
  handleClick,
}) => {
  const { id, name, icon, player, current, description, stats } = unit

  const { strength, traits } = current

  return (
    <UnitWrapper>
      <StyledUnit
        onClick={handleClick ? () => handleClick(unit) : () => {}}
        isClickable={!!handleClick}
        aria-label={name}
        data-tip
        data-for={`unit-tooltip-${id}`}
      >
        <Figure icon={icon} color={player?.color} isClickable={!!handleClick} />
        <UnitStatsAndTraits>
          <Strength
            currentStrength={strength}
            defaultStrength={stats.strength}
          />
        </UnitStatsAndTraits>
      </StyledUnit>

      <Tooltip id={`unit-tooltip-${id}`}>
        <TooltipTitle>{name}</TooltipTitle>
        <Strength
          currentStrength={strength}
          defaultStrength={stats.strength}
          showInfo
        />

        <TraitsList traits={traits} />

        {!!description ? (
          <FlavorText>
            <small>{description}</small>
          </FlavorText>
        ) : null}
      </Tooltip>
    </UnitWrapper>
  )
}
