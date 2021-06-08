import { FC, ReactNode } from 'react'
import { useSpring } from 'react-spring'

import { Overlay } from '../../../style/global'
import { animateFade } from '../../animations'
import { StyledModal } from './ModalStyles'

export interface ModalProps {
  /**
   * Determines is the modal is open or closed.
   */
  isOpen: boolean
  /**
   * The contents of the modal
   */
  children: ReactNode
  width?: number
}

export const Modal: FC<ModalProps> = ({ isOpen, width, children }) => {
  const fadeInOut = useSpring(animateFade(!isOpen))

  return (
    <>
      <StyledModal style={fadeInOut} width={width}>
        {children}
      </StyledModal>
      <Overlay style={fadeInOut} />
    </>
  )
}
