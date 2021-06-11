import { FC, ReactNode, useState } from 'react'
import { useChain, useSpring, useSpringRef } from 'react-spring'

import { Overlay } from '../../../style/global'
import { animateFade, animateSlideUpOffScreen } from '../../animations'
import { StyledModal } from './ModalStyles'

export interface ModalProps {
  isOpen: boolean
  children: ReactNode
  width?: number
}

export const Modal: FC<ModalProps> = ({ isOpen, width, children }) => {
  const fadeRef = useSpringRef()
  const slideRef = useSpringRef()

  // showAll, not isOpen, controls weather this component renders anything
  // because it syncs with animations
  const [showAll, setShowAll] = useState(true)

  const fadeIn = useSpring({ ...animateFade(!isOpen), ref: fadeRef })
  const slideUp = useSpring({
    ...animateSlideUpOffScreen(!isOpen),
    ref: slideRef,
    onRest: (props) => {
      const { opacity } = props.value

      if (!opacity) {
        setShowAll(false)
      }
    },
  })

  useChain(isOpen ? [fadeRef, slideRef] : [slideRef, fadeRef])

  return showAll ? (
    <Overlay style={fadeIn}>
      <StyledModal style={slideUp} width={width}>
        {children}
      </StyledModal>
    </Overlay>
  ) : null
}
