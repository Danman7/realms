import styled from 'styled-components'

interface UnitProps {
  readonly isClickable: boolean
}

export const StyledUnit = styled.div<UnitProps>`
  display: inline-block;
  align-items: center;
`
