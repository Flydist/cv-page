import styled from 'styled-components'
import crossImg from '../../../../assets/images/cross.svg'
import { StyledInput } from '../../../../components/Input/Input.styled'

export const SkillsBlock = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`

export const AddSkillButton = styled.span`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  padding: 0.1rem 0.3rem;
  background-color: #333333;
  border-radius: 4px;
  color: #fff;
  margin: 0 0.5rem 0.5rem 0;

  :hover {
    background-color: rgba(102, 102, 102, 1);
  }
`

export const Skill = styled(AddSkillButton)`
  :hover::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    bottom: 1rem;
    right: -0.5rem;
    display: inline-block;
    background-image: url(${crossImg});
  }
`
export const SkillInput = styled(StyledInput)`
  width: 40%;
  padding: 0.1rem 0;
`
