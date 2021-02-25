import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { loadState, saveState } from '../localStorage/localStorage'
import { AppState, rootReducer } from './rootReducer'

const persistedState = loadState<AppState>('cvState')

export const store = createStore(rootReducer, persistedState, composeWithDevTools())

store.subscribe(() => saveState(store.getState(), 'cvState'))
