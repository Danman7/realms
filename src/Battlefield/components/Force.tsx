import { GameTypes } from 'Game'
import { FC } from 'react'

interface ForceProps {
  units: GameTypes.Unit[]
}
export const Force: FC<ForceProps> = ({}) => {
  return <div>battleforce</div>
}
