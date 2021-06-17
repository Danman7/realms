import { FC } from 'react'

import { Icon } from '../../shared/components/Icon'
import { Tooltip } from '../../shared/components/Tooltip'
import { Strength } from './components/Strength'
import { TraitsList } from './components/TraitsList'
import { ActiveUnit, UnitClickHandler } from './types.d'
import {
  FlavorText,
  StyledUnit,
  TooltipTitle,
  UnitStatsAndTraits,
  UnitWrapper,
} from './UnitStyles'

interface UnitComponentProps {
  unit: ActiveUnit
  handleClick?: UnitClickHandler | null
}

/**
 * Component for displaying a single Unit figure with tooltip.
 *
 * @component
 * @param {ActiveUnit}  unit - Raw unit data.
 * @param handleClick - Optional on click handler that receives the unit data.
 * @example
 * <UnitComponent unit={new Unit('Pikemen', player1) />
 */
export const UnitComponent: FC<UnitComponentProps> = ({
  unit,
  handleClick,
}) => {
  const { id, name, icon, player, current, description, stats, state } = unit

  const { strength, traits } = current

  return (
    <UnitWrapper className={state} isClickable={!!handleClick}>
      <StyledUnit
        onClick={handleClick ? () => handleClick(unit) : () => {}}
        aria-label={name}
        data-tip
        data-for={`unit-tooltip-${id}`}
      >
        <Icon
          name={icon}
          size="4rem"
          color={player.color}
          isActive={!!handleClick}
        />
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
