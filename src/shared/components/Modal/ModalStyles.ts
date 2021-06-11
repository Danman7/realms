import { animated } from 'react-spring'
import styled from 'styled-components'

interface StyledModalProps {
  width?: number
}

export const StyledModal = styled(animated.div)<StyledModalProps>`
  border: 3px outset ${({ theme }) => theme.colors.primary};
  z-index: 3;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.surface};
  max-width: ${({ width }) => (width ? `${width}px` : '75ch')};
  width: 100%;
`
