import { combineReducers } from 'redux'
import { CvReducer } from '../reducers/CvReducer'

export const rootReducer = combineReducers({
  CvReducer,
})

export type AppState = ReturnType<typeof rootReducer>
