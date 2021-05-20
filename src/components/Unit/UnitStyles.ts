import styled from 'styled-components'

interface UnitProps {
  readonly isClickable: boolean
}

export const StyledUnit = styled.div<UnitProps>`
  display: inline-block;
  align-items: center;
`

export const UnitStatsAndTraits = styled.div`
  display: inline-block;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  z-index: 2;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.background};
`
