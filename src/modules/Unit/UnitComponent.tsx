import { FC } from 'react'

import { Figure } from '../../shared/components/Figure'
import { Icon } from '../../shared/components/Icon'
import { Tooltip } from '../../shared/components/Tooltip'
import { Strength } from './components/Strength'
import {
  FlavorText,
  StyledUnit,
  TooltipTitle,
  UnitStatsAndTraits,
  UnitWrapper,
} from './UnitStyles'
import { UnitTypes } from '.'

interface UnitComponentProps {
  data: UnitTypes.Unit
  handleClick?: (unit: UnitTypes.Unit) => void
}

export const UnitComponent: FC<UnitComponentProps> = ({
  data,
  handleClick,
}) => {
  const { id, name, icon, player, current, description, stats } = data

  const { strength, traits } = current

  return (
    <UnitWrapper>
      <StyledUnit
        onClick={handleClick ? () => handleClick(data) : () => {}}
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

        {traits &&
          traits.map((trait) => (
            <div key={`${id}-${trait.name}-icon`} aria-label={trait.name}>
              <Icon name={trait.icon} />
              {trait.name}
              {!!trait.value && `(${trait.value})`}: {trait.description}
            </div>
          ))}
        {!!description && (
          <FlavorText>
            <small>{description}</small>
          </FlavorText>
        )}
      </Tooltip>
    </UnitWrapper>
  )
}
