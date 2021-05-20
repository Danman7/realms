import { FC } from 'react'

import { Figure } from '../../shared/components/Figure'
import { Icon } from '../../shared/components/Icon'
import { FlexSection } from '../../style/global'
import { StyledUnit, UnitStatsAndTraits } from './UnitStyles'
import { UnitComponentProps } from './UnitTypes'

export const UnitComponent: FC<UnitComponentProps> = ({
  data,
  handleClick,
}) => {
  const { id, name, icon, player, current } = data

  const { strength, traits } = current

  return (
    <StyledUnit
      onClick={handleClick ? () => handleClick(data) : () => {}}
      isClickable={!!handleClick}
      aria-label={name}
    >
      <Figure icon={icon} color={player?.color} isClickable={!!handleClick} />
      <UnitStatsAndTraits>
        <FlexSection>
          <div aria-label="strength">
            <Icon name="fist" /> {strength}
          </div>
          {traits &&
            traits.map((trait) => (
              <div key={`${id}-${trait.name}`} aria-label={trait.name}>
                <Icon name={trait.icon} />
              </div>
            ))}
        </FlexSection>
      </UnitStatsAndTraits>
    </StyledUnit>
  )
}
