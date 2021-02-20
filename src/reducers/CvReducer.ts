import { CvActionTypes, SkillsType } from '../bus/cv/types'

export type CvState = {
  skills: SkillsType[],
}

const initialState = {
  skills: [],
}

export const CvReducer = (state = initialState, action: CvActionTypes): CvState => state
