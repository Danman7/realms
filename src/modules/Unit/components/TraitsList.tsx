import { FC } from 'react'

import { Icon } from '../../../shared/components/Icon'
import { UnitTypes } from '..'

interface TraitsListProps {
  traits?: UnitTypes.UnitTrait[]
}

export const TraitsList: FC<TraitsListProps> = ({ traits = [] }) =>
  traits ? (
    <>
      {traits.map((trait) => (
        <div key={`${trait.name}-icon`} aria-label={trait.name}>
          <Icon name={trait.icon} />
          {trait.name}
          {!!trait.value ? `(${trait.value})` : null}: {trait.description}
        </div>
      ))}
    </>
  ) : null
