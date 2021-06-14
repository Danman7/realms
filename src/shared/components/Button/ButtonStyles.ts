import { darken, lighten } from 'polished'
import styled from 'styled-components'

interface ButtonProps {
  color: string
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: 'Roboto Slab', serif;
  transition: all 0.2s;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  font-size: 1em;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  padding: 0.5em;
  text-decoration: none;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: ${({ theme, color }) =>
    `0px 4px 0px ${darken(0.1, theme.colors[color])}`};

  i {
    margin-right: 0.5em;
  }

  &:hover {
    background-color: ${({ theme, color }) =>
      lighten(0.1, theme.colors[color])};
    box-shadow: ${({ theme, color }) =>
      `0px 4px 0px ${theme.colors[color]}, 0 4px 4px ${theme.colors[color]}`};
  }

  &:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`
