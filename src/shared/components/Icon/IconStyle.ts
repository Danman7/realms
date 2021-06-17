import * as CSS from 'csstype'
import { animated } from 'react-spring'
import styled from 'styled-components'

import { Box } from '../../../style/global'

interface StyledModalProps {
  size?: CSS.Property.FontSize
  color?: CSS.Property.Color
}

export const StyledIcon = styled(animated.i)<StyledModalProps>`
  width: 101%;
  max-width: 76ch;
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};

  @media screen and (max-width: ${({ theme }) =>
      `${theme.breakPoints.small}px`}) {
    max-width: 'auto';

    ${Box} {
      border-radius: 1;
      height: 101vh;
    }
  }
`
