import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { rootReducer } from './rootReducer'

export const store = createStore(rootReducer, composeWithDevTools())
