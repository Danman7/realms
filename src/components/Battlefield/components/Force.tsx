import { FC } from 'react'

import { UnitTypes } from '../../Unit'

interface ForceProps {
  units: UnitTypes.Unit[]
}

export const Force: FC<ForceProps> = ({ units }) => {
  return <div>battleforce</div>
}
