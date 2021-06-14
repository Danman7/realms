import { animated } from 'react-spring'
import styled from 'styled-components'

import { Box } from '../../../style/global'

interface StyledModalProps {
  width?: number
}

export const ModalWrapper = styled(animated.div)<StyledModalProps>`
  width: 100%;
  max-width: 75ch;

  @media screen and (max-width: ${({ theme }) =>
      `${theme.breakPoints.small}px`}) {
    max-width: 'auto';

    ${Box} {
      border-radius: 0;
      height: 100vh;
    }
  }
`
