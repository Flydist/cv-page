import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyledInput } from '../../../../components/Input/Input.styled'
import { setLocation } from '../../actions'
import { useCvState } from '../../hooks/useCvState'
import { UserLocation } from './LocationInput.styled'

export const LocationInput: FC = () => {
  const [isLocationInputShown, setIsLocationInputShown] = useState(false)
  const { location } = useCvState()
  const dispatch = useDispatch()
  return (
    <div>
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
          onBlur={(e) => {
            const { value } = e.target
            dispatch(setLocation(value))
            setIsLocationInputShown(false)
          }}
        />
      )}
    </div>
  )
}
