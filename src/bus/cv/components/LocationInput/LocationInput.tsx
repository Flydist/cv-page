import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ContentContainer } from '../../../../components/Common.styled'
import { StyledInput } from '../../../../components/Input.styled'
import { AppState } from '../../../../init/rootReducer'
import { setLocation } from '../../actions'
import { UserLocation } from './LocationInput.styled'

export const LocationInput: FC = () => {
  const location = useSelector<AppState, string>((state) => state.CvReducer.location)
  const [isLocationInputShown, setIsLocationInputShown] = useState(false)
  const dispatch = useDispatch()

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target
    dispatch(setLocation(value))
    setIsLocationInputShown(false)
  }
  return (
    <ContentContainer>
      {!isLocationInputShown ? (
        <UserLocation onClick={() => setIsLocationInputShown(true)}>
          {location || 'Set location'}
        </UserLocation>
      ) : (
        <StyledInput
          fw={400}
          defaultValue={location}
          name="location"
          autoFocus
          onBlur={(e) => handleBlur(e)}
        />
      )}
    </ContentContainer>
  )
}
