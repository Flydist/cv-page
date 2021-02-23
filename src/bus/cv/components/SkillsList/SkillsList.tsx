import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { AppState } from '../../../../init/rootReducer'
import { CvState } from '../../../../reducers/CvReducer'
import { addNewSkill, deleteSkill } from '../../actions'
import {
  AddSkillButton, Skill, SkillInput, SkillsBlock,
} from './SkillsList.styled'

export const SkillsList: FC = () => {
  const [isInputShown, setIsInputShown] = useState(false)
  const dispatch = useDispatch()
  const { skills } = useSelector<AppState, CvState>((state) => state.CvReducer)
  return (
    <SkillsBlock>
      {skills
        .sort((a, b) => b.experience - a.experience)
        .map((item) => (
          <Skill key={item.id} onClick={() => dispatch(deleteSkill(item.id))}>
            {item.skill}
          </Skill>
        ))}
      {isInputShown ? (
        <SkillInput
          autoFocus
          onBlur={(e) => {
            const { value } = e.target
            setIsInputShown(false)
            if (value) {
              dispatch(
                addNewSkill({
                  skill: value,
                  experience: 0,
                  id: uuidv4(),
                }),
              )
            }
          }}
        />
      ) : (
        <AddSkillButton onClick={() => setIsInputShown(true)}>+</AddSkillButton>
      )}
    </SkillsBlock>
  )
}
