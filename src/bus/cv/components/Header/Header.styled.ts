import { Container } from 'react-bootstrap'
import styled from 'styled-components'

export const HeaderTag = styled.header`
  display: flex;
  min-height: 14rem;
  background-color: rgba(179, 186, 192, 0.2);
  width: 100%;
`

export const StyledContainer = styled(Container)`
  margin-top: 2.5rem;
`

export const ContentBlock = styled.div`
  display: flex;
  align-items: center;
`

export const UserInfo = styled.div`
  margin-left: 1.5rem;
  width: 100%;
`
export const PrintButton = styled.div`
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
