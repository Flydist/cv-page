import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSkillExperience } from '../../actions'
import { useCvState } from '../../hooks/useCvState'
import { StringsList } from '../Main/Main.styled'
import { Experience, ExpInput } from './SkillButtonsList.styled'

export const SkillButtonsList: FC = () => {
  const { skills } = useCvState()
  const [skillIdToShow, setSkillIdToShow] = useState('')
  const dispatch = useDispatch()

  const inputOnBlur = (id: string, value: string) => {
    if (!Number.isNaN(+value) && +value >= 0 && !!value) {
      dispatch(setSkillExperience(id, +value))
    }
    setSkillIdToShow('')
  }
  return (
    <StringsList fw={700}>
      {skills
        .sort((a, b) => b.experience - a.experience)
        .map((item) => (
          <li key={item.id}>
            {item.skill}
            {skillIdToShow === item.id ? (
              <ExpInput onBlur={(e) => inputOnBlur(item.id, e.target.value)} autoFocus />
            ) : (
              <Experience onClick={() => setSkillIdToShow(item.id)}>
                {item.experience ? `${item.experience} years` : 'Set exp'}
              </Experience>
            )}
          </li>
        ))}
    </StringsList>
  )
}
