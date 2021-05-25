import styled from 'styled-components'

import { Box } from '../../style/global'

interface UnitProps {
  readonly isClickable: boolean
}

export const StyledUnit = styled.div<UnitProps>`
  display: flex;
  align-items: flex-end;
`

export const UnitStatsAndTraits = styled(Box)`
  display: inline-block;
`

export const Strength = styled.div`
  font-size: 1.5em;
`

export const TooltipTitle = styled.h3`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const FlavorText = styled.div`
  font-style: italic;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`
