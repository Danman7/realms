import styled from 'styled-components'

export const StyledTooltip = styled.div`
  .__react_component_tooltip {
    color: ${({ theme }) => theme.colors.text};
    box-shadow: ${({ theme }) => theme.boxShadow};
    font-size: 1rem;
    max-width: 45ch;
  }
`
