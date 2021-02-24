import React, { useState, FC } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { InputContainer, StyledInput } from '../../../../components/Input/Input.styled'
import { setFullname } from '../../actions'
import { useCvState } from '../../hooks/useCvState'
import { FullnameContainer, Fullname } from './FullnameInput.styled'

export const FullnameInput: FC = () => {
  const { register, errors } = useForm({
    mode: 'onChange',
  })
  const dispatch = useDispatch()
  const { fullname } = useCvState()
  const [isFullnameInputShown, setIsFullnameInputShown] = useState(false)
  return (
    <FullnameContainer>
      {!isFullnameInputShown ? (
        <Fullname onClick={() => setIsFullnameInputShown(true)}>{fullname}</Fullname>
      ) : (
        <InputContainer isError={Boolean(errors.fullname)} errorText={errors.fullname?.message}>
          <StyledInput
            fs={2.5}
            fw={500}
            defaultValue={fullname}
            name="fullname"
            autoFocus
            ref={register({
              required: { value: true, message: 'Обязательно для заполнения' },
              pattern: {
                value: /^[^$&+,:;=?@#|'<>.^*()%!-]+$/,
                message: 'Некорректное значение',
              },
            })}
            onBlur={(e) => {
              const { value } = e.target
              if (value && !errors.fullname) {
                dispatch(setFullname(value))
              }
              setIsFullnameInputShown(false)
            }}
          />
        </InputContainer>
      )}
      <span>{errors.fullname?.message}</span>
    </FullnameContainer>
  )
}
