import React, { useState, FC } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { ContentContainer } from '../../../../components/Common.styled'
import { InputContainer, StyledInput } from '../../../../components/Input.styled'
import { fullnameRule } from '../../../../constants/constants'
import { AppState } from '../../../../init/rootReducer'
import { setFullname } from '../../actions'
import { Fullname } from './FullnameInput.styled'

export const FullnameInput: FC = () => {
  const { register, errors } = useForm({
    mode: 'onChange',
  })
  const dispatch = useDispatch()
  const fullname = useSelector<AppState, string>((state) => state.CvReducer.fullname)
  const [isFullnameInputShown, setIsFullnameInputShown] = useState(false)

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (!errors.fullname) {
      dispatch(setFullname(value))
    }
    setIsFullnameInputShown(false)
  }
  return (
    <ContentContainer>
      {!isFullnameInputShown ? (
        <Fullname onClick={() => setIsFullnameInputShown(true)}>{fullname}</Fullname>
      ) : (
        <InputContainer isError={Boolean(errors.fullname)} errorText={errors.fullname?.message}>
          <StyledInput
            fs={2.5}
            fw={500}
            isError={Boolean(errors.fullname)}
            defaultValue={fullname}
            name="fullname"
            autoFocus
            ref={register({
              required: { value: true, message: 'Обязательно для заполнения' },
              pattern: {
                value: fullnameRule,
                message: 'Некорректное значение',
              },
            })}
            onBlur={(e) => handleBlur(e)}
          />
        </InputContainer>
      )}
      <span>{errors.fullname?.message}</span>
    </ContentContainer>
  )
}
