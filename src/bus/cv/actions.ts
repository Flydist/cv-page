import {
  ADD_NEW_SKILL,
  CvActionTypes,
  DELETE_SKILL,
  SET_FULLNAME,
  SET_LOCATION,
  SET_SKILL_EXPERIENCE,
  SkillType,
} from './types'

export const addNewSkill = (skill: SkillType): CvActionTypes => ({
  type: ADD_NEW_SKILL,
  payload: skill,
})
export const setFullname = (fullname: string): CvActionTypes => ({
  type: SET_FULLNAME,
  payload: fullname,
})
export const setLocation = (location: string): CvActionTypes => ({
  type: SET_LOCATION,
  payload: location,
})
export const deleteSkill = (id: string): CvActionTypes => ({
  type: DELETE_SKILL,
  payload: id,
})
export const setSkillExperience = (id: string, experience: number): CvActionTypes => ({
  type: SET_SKILL_EXPERIENCE,
  payload: {
    id,
    experience,
  },
})
