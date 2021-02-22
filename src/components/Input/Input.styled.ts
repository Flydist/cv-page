import styled from 'styled-components'

type StyledInputProps = {
  fs?: number
  fw?: number
}

export const StyledInput = styled.input<StyledInputProps>`
  padding: 0;
  background-color: transparent;
  margin-bottom: 0.5rem;
  line-height: normal;
  font-size: ${({ fs }) => `${fs}rem`};
  font-weight: ${({ fw }) => `${fw}`};
  width: 100%;
  border: 0;
  border-bottom: 1px solid transparent;

  :hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  :focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.06);
    border-bottom: 1px solid black;
  }
`
