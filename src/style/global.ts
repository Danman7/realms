import styled, { createGlobalStyle } from 'styled-components'

import { Theme } from './themes/types'

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`

  body {
    font-family: 'Roboto Slab', serif;
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.lineHeights.body};
    margin: 0;
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
      line-height: ${({ theme }) => theme.lineHeights.heading};
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
  }
`

export const PaperBox = styled.div`
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border: 2px solid ${(props) => props.theme.colors.border};
  transition: all 0.1s ease-in-out 0s;
  align-self: center;
  display: inline-block;
  outline: none;
`
