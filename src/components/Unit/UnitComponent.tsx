import { FC } from 'react'

import { Figure } from '../../shared/components/Figure'
import { Icon } from '../../shared/components/Icon'
import { Tooltip } from '../../shared/components/Tooltip'
import { FlexSection } from '../../style/global'
import {
  FlavorText,
  Strength,
  StyledUnit,
  TooltipTitle,
  UnitStatsAndTraits,
} from './UnitStyles'
import { UnitComponentProps } from './UnitTypes'

export const UnitComponent: FC<UnitComponentProps> = ({
  data,
  handleClick,
}) => {
  const { id, name, icon, player, current, description } = data

  const { strength, traits } = current

  console.log(name)

  return (
    <>
      <StyledUnit
        onClick={handleClick ? () => handleClick(data) : () => {}}
        isClickable={!!handleClick}
        aria-label={name}
        data-tip
        data-for={`unit-tooltip-${id}`}
      >
        <Figure icon={icon} color={player?.color} isClickable={!!handleClick} />
        <UnitStatsAndTraits>
          <FlexSection>
            <Strength aria-label="strength">
              <Icon name="fist" />
              {strength}
            </Strength>
            {traits &&
              traits.map((trait) => (
                <div key={`${id}-${trait.name}-icon`} aria-label={trait.name}>
                  <Icon name={trait.icon} />
                </div>
              ))}
          </FlexSection>
        </UnitStatsAndTraits>
      </StyledUnit>

      <Tooltip id={`unit-tooltip-${id}`}>
        <TooltipTitle>{name}</TooltipTitle>
        <div>
          <Icon name="fist" />
          Strength: {strength}
        </div>

        {traits &&
          traits.map((trait) => (
            <div key={`${id}-${trait.name}-icon`} aria-label={trait.name}>
              <Icon name={trait.icon} />
              {trait.name}: {trait.description}
            </div>
          ))}
        {!!description && (
          <FlavorText>
            <small>{description}</small>
          </FlavorText>
        )}
      </Tooltip>
    </>
  )
}
