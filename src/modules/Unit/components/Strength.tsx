import { FC } from 'react'

import { Icon } from '../../../shared/components/Icon'
import { StrengthWrapper } from '../UnitStyles'

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
  <StrengthWrapper>
    <Icon name="fist" />
    {showInfo ? 'Strength: ' : null}
    {currentStrength}
  </StrengthWrapper>
)
