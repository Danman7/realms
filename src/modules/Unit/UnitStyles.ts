import styled from 'styled-components'

import { Box } from '../../style/global'

interface UnitWrapperProps {
  readonly isClickable?: boolean
}

export const StyledUnit = styled.div`
  transition: all 0.2s;
  position: relative;
  height: 4rem;
`

export const UnitWrapper = styled.div<UnitWrapperProps>`
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'inherit')};

  &:hover ${StyledUnit} {
    ${({ isClickable }) =>
      isClickable &&
      `
      transform: scale(1.3);
      `}
  }

  ${StyledUnit} > i {
    ${({ isClickable, theme }) =>
      isClickable &&
      `
      text-shadow: 1px 1px ${theme.colors.primary}
      `}
  }
`

export const UnitStatsAndTraits = styled(Box)`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const TooltipTitle = styled.h3`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 0.2em;
`

export const FlavorText = styled.div`
  margin-top: 1em;
  font-style: italic;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`
