import styled from 'styled-components'

import { CenterItems, FlexColumn, FlexSection } from '../../style/global'

export const BattlefieldWrapper = styled.div``

interface ForceWrapperProps {
  isDefender?: boolean
}

export const ArmyWrapper = styled(FlexSection)`
  width: 100%;
`

export const ForceWrapper = styled(FlexColumn)<ForceWrapperProps>`
  align-items: ${({ isDefender }) => (isDefender ? 'flex-end' : 'flex-start')};
  justify-content: flex-start;
  width: 50%;

  ${ArmyWrapper} {
    flex-direction: ${({ isDefender }) => (isDefender ? 'row-reverse' : 'row')};
  }
`

export const ActionsWrapper = styled(CenterItems)`
  margin-top: 1rem;
`
