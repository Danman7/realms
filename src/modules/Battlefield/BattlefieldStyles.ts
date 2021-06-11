import styled from 'styled-components'

import { FlexSection } from '../../style/global'

export const FieldWrapper = styled.div`
  display: grid;
  grid-template-columns: [body] 100%;
  grid-template-rows: [instructions] 2rem [invaderForce] 5rem [invaderStats] 2rem [horizontalLine] 1rem [defenderStats] 2rem [defenderForce] 5rem [actions] 4rem;
`

export const ArmyWrapper = styled(FlexSection)`
  width: 100%;
`

export const FieldLine = styled.hr`
  width: 100%;
  border-top: 1px dashed ${({ theme }) => theme.colors.gray};
`
