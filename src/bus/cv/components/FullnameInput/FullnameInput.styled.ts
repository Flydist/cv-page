import styled from 'styled-components'

export const FullnameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;

  span {
    font-size: 0.875rem;
    margin: 0 0 0.5rem;
    color: rgba(255, 0, 0, 1);
    width: auto;
  }
`
export const Fullname = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  margin-bottom: 0.5rem;
  word-break: break-word;
  :hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`
