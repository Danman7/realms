import styled from 'styled-components'

export const ForceWrapper = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
`

export const Army = styled.div`
  display: flex;
`

export const FieldLine = styled.hr`
  width: 100%;
  border-top: 1px dashed ${({ theme }) => theme.colors.gray};
`
