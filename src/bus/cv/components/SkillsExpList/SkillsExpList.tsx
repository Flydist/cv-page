import React, { FC, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { StringsList } from '../../../../components/Common.styled'
import { checkExperienceValidity } from '../../../../helpers/validateFunctions'
import { AppState } from '../../../../init/rootReducer'
import { setSkillExperience } from '../../actions'
import { SkillType } from '../../types'
import { Experience } from './Experience'

export const SkillsExpList: FC = () => {
  const skills = useSelector<AppState, SkillType[]>((state) => state.CvReducer.skills, shallowEqual)
  const [skillIdToShow, setSkillIdToShow] = useState('')
  const dispatch = useDispatch()

  const handleBlur = (id: string, value: string) => {
    if (checkExperienceValidity(value)) {
      dispatch(setSkillExperience(id, Number(value)))
    }
    setSkillIdToShow('')
  }
  return (
    <StringsList fw={700}>
      {skills
        .sort((a, b) => b.experience - a.experience)
        .map((item) => (
          <Experience
            key={item.id}
            item={item}
            handler={handleBlur}
            setter={setSkillIdToShow}
            idToShow={skillIdToShow}
          />
        ))}
    </StringsList>
  )
}
