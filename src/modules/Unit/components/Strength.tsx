import { FC } from 'react'

import { Icon } from '../../../shared/components/Icon'
import { StrengthWrapper } from '../UnitStyles'

interface StrengthProps {
  currentStrength: number
  defaultStrength: number
  showInfo?: boolean
}

export const Strength: FC<StrengthProps> = ({
  currentStrength,
  defaultStrength,
  showInfo,
}) => (
  <StrengthWrapper>
    <Icon name="fist" />
    {showInfo && 'Strength: '}
    {currentStrength}
  </StrengthWrapper>
)
