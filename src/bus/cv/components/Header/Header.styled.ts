import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import reloadImg from '../../../../assets/images/ic-reload.svg'

export const HeaderTag = styled.header`
  display: flex;
  min-height: 14rem;
  background-color: rgba(179, 186, 192, 0.2);
  width: 100%;
`

export const StyledContainer = styled(Container)`
  margin-top: 2.5rem;
`

export const FlexBlock = styled.div`
  display: flex;
`

export const ContentBlock = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const ImgContainer = styled.div`
  position: relative;

  :hover::before {
    content: '';
    display: block;
    position: absolute;
    top: 1rem;
    right: 0;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: rgba(52, 131, 204, 1);
    background-image: url(${reloadImg});
    background-repeat: no-repeat;
    background-position: center;
  }
`

export const UserInfo = styled.div`
  margin-left: 1.5rem;
`
export const PrintButton = styled.span`
  color: rgba(52, 131, 204, 1);
  height: fit-content;
  white-space: nowrap;

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

  @media screen and (max-width: 992px) {
    display: none;
  }
`

export const UserImage = styled.img`
  border: 4px solid #fff;
  border-radius: 100%;
  width: 10.5rem;
  height: 10.5rem;

  @media screen and (max-width: 576px) {
    width: 9rem;
    height: 9rem;
  }
`

export const UserLanguage = styled.div`
  img {
    margin-right: 0.5rem;
  }
`
