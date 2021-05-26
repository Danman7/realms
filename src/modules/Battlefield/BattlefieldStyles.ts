import styled from 'styled-components'

import { FlexColumn } from '../../style/global'

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
