import './shared/assets/icons.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import { GlobalStyle } from './style/global'
import { defaultTheme } from './style/themes'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
