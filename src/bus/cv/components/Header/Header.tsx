import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import avatarImg from '../../../../assets/images/avatar.jpg'
import languageFlag from '../../../../assets/images/gb.png'
import {
  HeaderTag,
  UserImage,
  UserInfo,
  UserLanguage,
  PrintButton,
  ContentBlock,
  StyledContainer,
} from './Header.styled'
import { FullnameInput } from '../FullnameInput/FullnameInput'
import { LocationInput } from '../LocationInput/LocationInput'
import { SkillsList } from '../SkillsList/SkillsList'

export const Header: FC = () => (
  <HeaderTag>
    <StyledContainer>
      <Row>
        <Col lg={9} md={12}>
          <ContentBlock>
            <UserImage src={avatarImg} alt="userImg" />
            <UserInfo>
              <FullnameInput />
              <LocationInput />
              <UserLanguage>
                <img src={languageFlag} alt="flag" />
                English
              </UserLanguage>
              <SkillsList />
            </UserInfo>
          </ContentBlock>
        </Col>
        <Col sm={3} xs={12}>
          <PrintButton>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 20H8V19H14V20ZM24 5V18H20V24H4V18H0V5H4V0H20V5H24ZM18 15H6V22H18V15ZM18 2H6V5H18V2ZM22 7.5C22 7.224 21.776 7 21.5 7C21.224 7 21 7.224 21 7.5C21 7.776 21.224 8 21.5 8C21.776 8 22 7.776 22 7.5ZM16 17H8V18H16V17Z"
                fill="#B3BAC0"
              />
            </svg>
            Print this page
          </PrintButton>
        </Col>
      </Row>
    </StyledContainer>
  </HeaderTag>
)
