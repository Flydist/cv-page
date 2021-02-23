import styled from 'styled-components'
import crossImg from '../../assets/images/cross.svg'
import checkmarkImg from '../../assets/images/checkmark.svg'

type InputContainerProps = {
  isError?: boolean
  errorText?: string
}

type StyledInputProps = {
  fs?: number
  fw?: number
}

export const StyledInput = styled.input<StyledInputProps>`
  display: block;
  padding: 0;
  background-color: transparent;
  margin-bottom: 0.5rem;
  line-height: normal;
  font-size: ${({ fs }) => `${fs}rem`};
  font-weight: ${({ fw }) => `${fw}`};
  border: 0;
  border-bottom: 1px solid transparent;
  width: 100%;

  :hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  :focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.06);
    border-bottom: 1px solid black;
  }
`

export const InputContainer = styled.div<InputContainerProps>`
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 55%;
  margin-right: 0.5rem;

  ::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    bottom: 40%;
    right: 0.5rem;
    display: inline-block;
    background-image: url(${({ isError }) => (isError ? crossImg : checkmarkImg)});
  }

  @media screen and (max-width: 576px) {
    width: 95%;
  }
`
