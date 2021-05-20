import styled from 'styled-components'

import { FigureStyles } from '../../shared/components/Figure'
import { FlexSection } from '../../style/global'

export const BattlefieldWrapper = styled.div`
  ${FigureStyles.FigureModel}, ${FigureStyles.FigureShadow} {
    font-size: 4rem;
  }
`

export const BattleTitle = styled.div`
  display: flex;
  justify-content: center;
`

export const PlayerNames = styled(FlexSection)``

export const Grounds = styled(FlexSection)``

export const BattlefieldSection = styled.div``
