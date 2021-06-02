import styled, { createGlobalStyle } from 'styled-components'

import { Theme } from './themes/types'

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`

  body {
    font-family: 'Roboto Slab', serif;
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.text};
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
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSizes[5]};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSizes[4]};
    }

    h4 {
      font-size: ${({ theme }) => theme.fontSizes[3]};
    }

    h5 {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }

    i {
      vertical-align: middle;
    }

    small {
      font-size: ${({ theme }) => theme.fontSizes[0]};
    }

    p, small, i {
      width: clamp(45ch, 50%, 75ch);
    }
  }
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const FlexSection = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CenterItems = styled.div`
  display: flex;
  justify-content: center;
`

export const Box = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 2;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.background};
`
