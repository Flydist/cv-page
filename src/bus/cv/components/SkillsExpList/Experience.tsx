import React, { FC } from 'react'
import { SkillType } from '../../types'
import { ExperienceLink, ExpInput } from './Experience.styled'

type ExperienceProps = {
  item: SkillType
  handler: (id: string, value: string) => void
  setter: React.Dispatch<React.SetStateAction<string>>
  idToShow: string
}

export const Experience: FC<ExperienceProps> = ({
  item, handler, setter, idToShow,
}) => (
  <li key={item.id}>
    {item.skill}
    {idToShow === item.id ? (
      <ExpInput onBlur={(e) => handler(item.id, e.target.value)} autoFocus />
    ) : (
      <ExperienceLink onClick={() => setter(item.id)}>
        {item.experience ? `${item.experience} years` : 'Set exp (years)'}
      </ExperienceLink>
    )}
  </li>
)
