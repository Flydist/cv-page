import styled from 'styled-components'
import { StyledInput } from '../../../../components/Input/Input.styled'
import { PortfolioLink } from '../Main/Main.styled'

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
