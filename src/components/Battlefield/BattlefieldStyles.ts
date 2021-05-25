import styled from 'styled-components'

import { FigureStyles } from '../../shared/components/Figure'
import { FlexColumn } from '../../style/global'

export const BattlefieldWrapper = styled.div`
  ${FigureStyles.FigureModel}, ${FigureStyles.FigureShadow} {
    font-size: 4rem;
  }
`

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
