import { useSelector } from 'react-redux'
import { AppState } from '../../../init/rootReducer'
import { CvState } from '../../../reducers/CvReducer'

export const useCvState = (): CvState => {
  const CvState = useSelector<AppState, CvState>((state) => state.CvReducer)
  return CvState
}
