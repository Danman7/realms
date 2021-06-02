import { FC } from 'react'

import { Icon } from '../../../shared/components/Icon'
import { UnitTrait } from '../types.d'

interface TraitsListProps {
  traits?: UnitTrait[]
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
