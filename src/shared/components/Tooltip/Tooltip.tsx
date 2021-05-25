import { FC, ReactNode, useContext } from 'react'
import ReactTooltip from 'react-tooltip'
import { ThemeContext } from 'styled-components'

import { StyledTooltip } from './TooltipStyles'

export interface TooltipProps {
  /**
   * Mandatory tooltip id to be paired with element.
   */
  id: string
  /**
   * Contents of the tooltip in JSX format.
   */
  children: ReactNode
}

export const Tooltip: FC<TooltipProps> = ({ id, children }) => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledTooltip>
      <ReactTooltip
        id={id}
        effect="solid"
        borderColor={themeContext.colors.gray}
        backgroundColor={themeContext.colors.background}
        type="light"
        border
        delayShow={500}
        delayHide={500}
      >
        {children}
      </ReactTooltip>
    </StyledTooltip>
  )
}
