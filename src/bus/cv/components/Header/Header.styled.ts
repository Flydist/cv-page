import styled from 'styled-components'
import crossImg from '../../../../assets/images/cross.svg'

export const HeaderTag = styled.header`
  display: flex;
  min-height: 14rem;
  background-color: rgba(179,186,192,.2);
  width: 100%;
`

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  width: 70%;
  max-width: 1440px;
  margin: 2.5rem auto 0 auto;
`

export const UserInfo = styled.div`
  width: 22.5rem;
  margin: 0 1.5rem;

  & > p, span, h2{
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
  right:0;
  top: 0;

  svg {
    margin-right: 0.5rem;
  }

  :hover {
    color: rgba(235, 87, 87, 1);
    cursor: pointer;
    svg {
      stroke: rgba(235, 87, 87, 1);
      fill: rgba(235, 87, 87, 1);
    }
    svg > path {
      stroke: inherit;
      fill: inherit;
    }
  }
`
export const Skill = styled.span`
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
  :hover::after {
    content: '';
    position: absolute;
    width:1rem;
    height: 1rem;
    bottom: 1rem;
    right: -0.5rem;
    display: inline-block;
    background-image: url(${crossImg});
  }
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
