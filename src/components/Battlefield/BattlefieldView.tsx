import { FC } from 'react'

import { FlexSection } from '../../style/global'
import { BattleTitle, BattlefieldWrapper } from './BattlefieldStyles'
import { Force } from './components/Force'
import { BattlefieldTypes } from '.'

export interface BattlefieldProps {
  battlefield: BattlefieldTypes.Battlefield
}

export const BattlefieldView: FC<BattlefieldProps> = ({ battlefield }) => {
  const { regionName, forces } = battlefield

  return (
    <BattlefieldWrapper>
      <BattleTitle>
        <h1>Battle of {regionName}</h1>
      </BattleTitle>

      <FlexSection>
        {forces.map((force, index) => (
          <Force force={force} key={`force-${index}`} />
        ))}
      </FlexSection>
    </BattlefieldWrapper>
  )
}
