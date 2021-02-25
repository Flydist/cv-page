import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ReactComponent as PrintIcon } from '../../../../assets/images/printer.svg'
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
  FlexBlock,
  ImgContainer,
} from './Header.styled'
import { FullnameInput } from '../FullnameInput/FullnameInput'
import { LocationInput } from '../LocationInput/LocationInput'
import { SkillsList } from '../SkillsList/SkillsList'

export const Header: FC = () => (
  <HeaderTag>
    <StyledContainer>
      <Row>
        <Col xs={12}>
          <FlexBlock>
            <ContentBlock>
              <ImgContainer>
                <UserImage src={avatarImg} alt="userImg" />
              </ImgContainer>
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
            <PrintButton>
              <PrintIcon />
              Print this page
            </PrintButton>
          </FlexBlock>
        </Col>
      </Row>
    </StyledContainer>
  </HeaderTag>
)
