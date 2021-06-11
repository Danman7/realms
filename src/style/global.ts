import { transparentize } from 'polished'
import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

import { Theme } from './themes/types'

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Roboto Slab', serif;
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.onBackground};
    margin: 0;
    letter-spacing: 0.1px;
    text-align: justify;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
    
    * {
      box-sizing: border-box;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: ${({ theme }) => theme.fontSizes[6]};
      line-height: ${({ theme }) => theme.fontSizes[6]};
    }
    
    h2 {
      font-size: ${({ theme }) => theme.fontSizes[5]};
      line-height: ${({ theme }) => theme.fontSizes[5]};
    }
    
    h3 {
      font-size: ${({ theme }) => theme.fontSizes[4]};
      line-height: ${({ theme }) => theme.fontSizes[4]};
    }
    
    h4 {
      font-size: ${({ theme }) => theme.fontSizes[3]};
      line-height: ${({ theme }) => theme.fontSizes[3]};
    }
    
    h5 {
      font-size: ${({ theme }) => theme.fontSizes[2]};
      line-height: ${({ theme }) => theme.fontSizes[2]};
    }
    
    i {
      vertical-align: middle;
    }
    
    small {
      font-size: ${({ theme }) => theme.fontSizes[0]};
    }
    
    p, small {
      width: clamp(45ch, 50%, 75ch);
    }
  }
  `

interface ElementProps {
  height?: number
  padding?: number
}

const Element = styled.div<ElementProps>`
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  padding: ${({ padding }) => (padding ? `${padding}px` : '0')};
`

export const Grid = styled.div`
  display: grid;

  @media screen and (min-width: ${({ theme }) =>
      `${theme.breakPoints.large}px`}) {
    grid-template-columns: repeat(12, 1fr);
    gap: ${({ theme }) => theme.gutters.medium}px
      ${({ theme }) => theme.gutters.medium}px;
  }

  @media screen and (max-width: ${({ theme }) =>
      `${theme.breakPoints.large}px`}) {
    grid-template-columns: repeat(12, 1fr);
    gap: ${({ theme }) => theme.gutters.medium}px
      ${({ theme }) => theme.gutters.medium}px;
  }

  @media screen and (max-width: ${({ theme }) =>
      `${theme.breakPoints.medium}px`}) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (max-width: ${({ theme }) =>
      `${theme.breakPoints.small}px`}) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.gutters.small}px
      ${({ theme }) => theme.gutters.small}px;
  }
`

export const FlexColumn = styled(Element)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const FlexSection = styled(Element)`
  display: flex;
  justify-content: space-between;
`

export const CenterItems = styled(Element)`
  display: flex;
  justify-content: center;
`

interface BoxProps {
  height?: string
}

export const Box = styled.div<BoxProps>`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  height: ${({ height }) => height || 'auto'};
`

export const Overlay = styled(animated.div)`
  display: grid;
  place-items: center;
  z-index: 1;
  position: absolute;
  background: ${transparentize(0.1, '#000')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
