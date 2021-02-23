import Container from 'react-bootstrap/esm/Container'
import styled from 'styled-components'
import { StyledInput } from '../../../../components/Input/Input.styled'

export const StyledContainer = styled(Container)`
  margin-top: 2.5rem;
`

type StringsListType = {
  fw?: number
}
export const StringsList = styled.ul<StringsListType>`
  padding: 0;
  margin-left: 0;
  list-style: none;

  li {
    margin: 0.5rem 0;
    font-weight: ${({ fw }) => fw};
  }

  li::before {
    content: '—';
    position: relative;
    left: -5px;
  }
`
export const PortfolioLink = styled.a`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;

  :hover {
    text-decoration: none;
    color: rgba(235, 87, 87, 1);
    cursor: pointer;
    border-bottom: none;
  }
`

export const Experience = styled(PortfolioLink)`
  margin-left: 0.3rem;
  border-bottom: 1px dashed;

  :hover {
    text-decoration: none;
    color: rgba(235, 87, 87, 1);
    cursor: pointer;
    border-bottom: none;
  }
`

export const ExpInput = styled(StyledInput)`
  display: inline-block;
  margin: 0 0 0 0.2rem;
  width: 2em;
`
