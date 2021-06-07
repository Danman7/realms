import { darken, lighten } from 'polished'
import styled from 'styled-components'

interface ButtonProps {
  color: string
}

export const StyledButton = styled.button<ButtonProps>`
  font-size: 1.1em;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 0.5em;
  text-decoration: none;
  color: #fff;
  position: relative;
  display: inline-block;
  transition: all ${({ theme }) => theme.animationDuration};

  ${({ color, theme }) =>
    color &&
    `
    background-color: ${theme.colors[color]};
    box-shadow: 0px 5px 0px 0px ${[darken(0.1, theme.colors[color])]};
    `}

  i {
    margin-right: 0.5em;
  }

  &:hover {
    background-color: ${({ theme, color }) =>
      lighten(0.15, theme.colors[color])};
  }

  &:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`
