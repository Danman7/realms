import { animated } from 'react-spring'
import styled from 'styled-components'

interface StyledModalProps {
  width?: number
}

export const StyledModal = styled(animated.div)<StyledModalProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 3;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.background};
  width: ${({ width }) => (width ? `${width}px` : 'clamp(45ch, 50%, 75ch)')};
`
