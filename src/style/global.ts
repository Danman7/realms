import { transparentize } from 'polished'
import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

import { Elevation, Theme } from './themes/types'

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Roboto Slab', serif;
    font-size: ${({ theme }) => theme.fontSizes[1]};
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.onBackground};
    margin: 0;
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
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: ${({ theme }) => theme.fontSizes[6]};
      line-height: ${({ theme }) => theme.fontSizes[6]};
      font-weight: ${({ theme }) => theme.fontWeights.thin};
      letter-spacing: -1.5px;
    }
    
    h2 {
      font-size: ${({ theme }) => theme.fontSizes[5]};
      line-height: ${({ theme }) => theme.fontSizes[5]};
      font-weight: ${({ theme }) => theme.fontWeights.thin};
      letter-spacing: -0.5px;
    }
    
    h3 {
      font-size: ${({ theme }) => theme.fontSizes[4]};
      line-height: ${({ theme }) => theme.fontSizes[4]};
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      letter-spacing: 0;
    }
    
    h4 {
      font-size: ${({ theme }) => theme.fontSizes[3]};
      line-height: ${({ theme }) => theme.fontSizes[3]};
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      letter-spacing: 0.25px;
    }
    
    h5 {
      font-size: ${({ theme }) => theme.fontSizes[2]};
      line-height: ${({ theme }) => theme.fontSizes[2]};
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      letter-spacing: 0;
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
      `${theme.breakPoints.medium}px`}) {
    grid-template-columns: repeat(12, 1fr);
    gap: ${({ theme }) => theme.gutters.medium}px
      ${({ theme }) => theme.gutters.medium}px;
  }

  @media screen and (max-width: ${({ theme }) =>
      `${theme.breakPoints.medium}px`}) {
    grid-template-columns: repeat(8, 1fr);
    gap: ${({ theme }) => theme.gutters.medium}px
      ${({ theme }) => theme.gutters.medium}px;
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
  elevation?: Elevation
}

export const Box = styled.div<BoxProps>`
  z-index: ${({ theme, elevation = 1 }) => theme.elevation[elevation]};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  height: ${({ height }) => height || 'auto'};
  box-shadow: ${({ elevation = 1, theme }) =>
    `0 0 ${theme.elevation[elevation]}px ${transparentize(0.8, '#000')}, 0 ${
      theme.elevation[elevation]
    }px ${theme.elevation[elevation]}px ${transparentize(0.8, '#000')}`};
`

export const Overlay = styled(animated.div)`
  display: grid;
  place-items: center;
  z-index: 1;
  position: absolute;
  background: ${transparentize(0.5, '#000')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
