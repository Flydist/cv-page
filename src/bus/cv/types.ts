export type SkillType = {
  skill: string
  experience: number
  id: string
}

export const ADD_NEW_SKILL = 'ADD_NEW_SKILL'
export const SET_FULLNAME = 'SET_FULLNAME'
export const SET_LOCATION = 'SET_LOCATION'
export const DELETE_SKILL = 'DELETE_SKILL'
export const SET_SKILL_EXPERIENCE = 'SET_SKILL_EXPERIENCE'

type AddNewSkillAction = {
  type: typeof ADD_NEW_SKILL
  payload: SkillType
}
type SetFullnameAction = {
  type: typeof SET_FULLNAME
  payload: string
}
type SetLocationAction = {
  type: typeof SET_LOCATION
  payload: string
}
type DeleteSkillAction = {
  type: typeof DELETE_SKILL
  payload: string
}
type SetSkillExperienceAction = {
  type: typeof SET_SKILL_EXPERIENCE
  payload: {
    id: string
    experience: number
  }
}

export type CvActionTypes =
  | AddNewSkillAction
  | SetFullnameAction
  | SetLocationAction
  | DeleteSkillAction
  | SetSkillExperienceAction
