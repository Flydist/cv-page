import {
  ADD_NEW_SKILL,
  CvActionTypes,
  DELETE_SKILL,
  SET_FULLNAME,
  SET_LOCATION,
  SET_SKILL_EXPERIENCE,
  SkillType,
} from '../bus/cv/types'

export type CvState = {
  fullname: string
  location: string
  skills: SkillType[]
}

const initialState = {
  fullname: 'Kirill Radaev',
  location: 'Saransk',
  skills: [
    {
      skill: 'PHP',
      experience: 6,
      id: '100',
    },
    {
      skill: 'JavaScript',
      experience: 4.5,
      id: '200',
    },
    {
      skill: 'Ruby',
      experience: 2,
      id: '300',
    },
  ],
}

export const CvReducer = (state = initialState, action: CvActionTypes): CvState => {
  switch (action.type) {
    case ADD_NEW_SKILL:
      return {
        ...state,
        skills: [...state.skills, action.payload],
      }
    case SET_FULLNAME:
      return {
        ...state,
        fullname: action.payload,
      }
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      }
    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter((skill) => skill.id !== action.payload),
      }
    case SET_SKILL_EXPERIENCE:
      return {
        ...state,
        skills: [
          ...state.skills.map((skill) => (skill.id === action.payload.id
            ? { ...skill, experience: action.payload.experience }
            : skill)),
        ],
      }
    default:
      return state
  }
}
