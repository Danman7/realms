import styled from 'styled-components'

import { FlexColumn, FlexSection } from '../../style/global'

export const BattlefieldWrapper = styled.div``

export const BattleTitle = styled.div`
  display: flex;
  justify-content: center;
`

interface ForceWrapperProps {
  isDefender?: boolean
}

export const ForceWrapper = styled(FlexColumn)<ForceWrapperProps>`
  align-items: ${({ isDefender }) => (isDefender ? 'flex-end' : 'flex-start')};
`

export const ArmyWrapper = styled(FlexSection)``
