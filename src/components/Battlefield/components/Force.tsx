import { FC } from 'react'

import { Icon } from '../../../shared/components/Icon'
import { UnitComponent } from '../../Unit'
import { ForceWrapper } from '../BattlefieldStyles'
import { BattlefieldTypes } from '..'

interface ForceProps {
  force: BattlefieldTypes.Force
}

export const Force: FC<ForceProps> = ({ force }) => {
  const { player, units, isDefender } = force

  return (
    <ForceWrapper isDefender={isDefender}>
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
    </ForceWrapper>
  )
}
