import styled from 'styled-components'
import crossImg from '../../../../assets/images/cross.svg'
import { Container } from '../../../../common/common.styled'
import { StyledInput } from '../../../../components/Input/Input.styled'

export const HeaderTag = styled.header`
  display: flex;
  min-height: 14rem;
  background-color: rgba(179, 186, 192, 0.2);
  width: 100%;
`

export const ContentContainer = styled(Container)`
  position: relative;
  align-items: center;
`

export const UserInfo = styled.div`
  margin: 0 1.5rem;

  & > p,
  span,
  h2 {
    cursor: default;
  }
`
export const SkillsBlock = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`
export const PrintButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: rgba(52, 131, 204, 1);

  svg {
    margin-right: 0.5rem;
  }

  :hover {
    color: rgba(235, 87, 87, 1);
    cursor: pointer;
    svg {
      fill: rgba(235, 87, 87, 1);
    }
    svg > path {
      fill: inherit;
    }
  }
`
export const AddSkillButton = styled.span`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  padding: 0.2rem 0.3rem;
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
`

export const UserImage = styled.img`
  border: 4px solid #fff;
  border-radius: 100%;
  width: 10.5rem;
  height: 10.5rem;
`
export const Fullname = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  :hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`
export const UserLocation = styled.p`
  font-weight: 400;
  margin-bottom: 0.5rem;
  :hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`
export const UserLanguage = styled.div`
  img {
    margin-right: 0.5rem;
  }
`
