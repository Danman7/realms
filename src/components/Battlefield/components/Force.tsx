import { FC } from 'react'

import { Icon } from '../../../shared/components/Icon'
import { FlexColumn } from '../../../style/global'
import { UnitComponent } from '../../Unit'
import { BattlefieldTypes } from '..'

interface ForceProps {
  force: BattlefieldTypes.Force
}

export const Force: FC<ForceProps> = ({ force }) => {
  const { player, units } = force
  return (
    <FlexColumn>
      <div>
        {!!player ? (
          <h2 style={{ color: player.color }}>
            <Icon name={player.faction.icon} /> <span>{player.name}</span>
          </h2>
        ) : (
          <h2>Local Garrison</h2>
        )}
      </div>

      {units.map((unit) => (
        <UnitComponent key={unit.id} data={unit} />
      ))}
    </FlexColumn>
  )
}
