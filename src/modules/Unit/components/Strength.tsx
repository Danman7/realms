import { FC } from 'react'

import { Icon } from '../../../shared/components/Icon'

interface StrengthProps {
  currentStrength: number
  defaultStrength: number
  showInfo?: boolean
}

export const Strength: FC<StrengthProps> = ({
  currentStrength = 0,
  defaultStrength = 0,
  showInfo,
}) => (
  <div>
    <Icon name="fist" />
    {showInfo ? 'Strength: ' : null}
    {currentStrength}
  </div>
)
