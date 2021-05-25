import { darken } from 'polished'
import styled from 'styled-components'

interface FigureProps {
  readonly isClickable?: boolean
}
const figureSize = '2.5rem'

export const FigureModel = styled.i<FigureProps>`
  position: relative;
  z-index: 2;
  font-size: ${figureSize};
  line-height: 1.2em;
  display: inline-block;
  transform: skewX(6deg);
  color: ${({ color }) => color};
  text-shadow: 1px -1px 1px ${({ color }) => color && darken(0.1, color)},
    2px -2px 1px ${({ color }) => color && darken(0.1, color)},
    3px -3px 1px ${({ color }) => color && darken(0.1, color)},
    4px -4px 1px ${({ color }) => color && darken(0.1, color)},
    5px -5px 0 ${({ color }) => color && darken(0.1, color)};

  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'inherit')};

  ${({ theme, isClickable }) =>
    isClickable &&
    `
    &:hover {
      color: ${theme.colors.primary};
      text-shadow:
      1px -1px 1px ${darken(0.1, theme.colors.primary)},
      2px -2px 1px ${darken(0.1, theme.colors.primary)},
      3px -3px 1px ${darken(0.1, theme.colors.primary)},
      4px -4px 1px ${darken(0.1, theme.colors.primary)},
      5px -5px 0 ${darken(0.1, theme.colors.primary)};
    }
    
    `}
`

export const FigureShadow = styled.i`
  font-size: ${figureSize};
  line-height: 1.2em;
  position: absolute;
  top: 0.1em;
  left: 0.35em;
  color: #333;
  text-shadow: 0 0 5px #333;
  transform: rotateX(-46deg) skewX(-38deg);
`

export const FigureWrpper = styled.div`
  display: inline-block;
  align-items: center;
  position: relative;
`
