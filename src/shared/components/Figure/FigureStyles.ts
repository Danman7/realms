import { darken } from 'polished'
import styled from 'styled-components'

interface FigureProps {
  readonly isClickable?: boolean
}

export const FigureWrpper = styled.div<FigureProps>`
  align-items: center;
  position: relative;
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'inherit')};
  transition: all 0.2s;

  &:hover {
    ${({ isClickable, theme }) =>
      isClickable &&
      `
       transform: scale(1.3); 
    `}
  }

  &:active {
    transform: scale(1);
  }
`

const figureSize = '4em'

export const FigureModel = styled.i`
  position: relative;
  z-index: 2;
  font-size: ${figureSize};
  line-height: 1.2em;
  transform: skewX(6deg);
  max-width: 100%;
  display: block;
  color: ${({ color }) => color};
  text-shadow: 1px -1px 1px ${({ color }) => color && darken(0.1, color)},
    2px -2px 1px ${({ color }) => color && darken(0.1, color)},
    3px -3px 1px ${({ color }) => color && darken(0.1, color)},
    4px -4px 1px ${({ color }) => color && darken(0.1, color)},
    5px -5px 0 ${({ color }) => color && darken(0.1, color)};
`

export const FigureShadow = styled.i`
  font-size: ${figureSize};
  max-width: 100%;
  line-height: 1.2em;
  position: absolute;
  top: 0.1em;
  left: 0.35em;
  color: #333;
  text-shadow: 0 0 5px #333;
  transform: rotateX(-46deg) skewX(-38deg);
`
