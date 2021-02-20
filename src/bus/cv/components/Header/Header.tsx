import React, { FC } from 'react'
import avatarImg from '../../../../assets/images/avatar.jpg'
import languageFlag from '../../../../assets/images/gb.png'
import {
  HeaderTag, ContentContainer, UserImage,
  Fullname, UserInfo, UserLocation, UserLanguage, SkillsBlock, Skill, PrintButton,
} from './Header.styled'

export const Header: FC = () => (
  <HeaderTag>
    <ContentContainer>
      <UserImage src={avatarImg} alt="userImg" />
      <UserInfo>
        <Fullname>
          John Smith
        </Fullname>
        <UserLocation>
          Portland, Oregon, USA
        </UserLocation>
        <UserLanguage>
          <img src={languageFlag} alt="flag" />
          English
        </UserLanguage>
        <SkillsBlock>
          <Skill>PHP</Skill>
          <Skill>Java Script</Skill>
          <Skill>Ruby</Skill>
          <Skill>+</Skill>
        </SkillsBlock>
      </UserInfo>
      <PrintButton>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 20H8V19H14V20ZM24 5V18H20V24H4V18H0V5H4V0H20V5H24ZM18 15H6V22H18V15ZM18 2H6V5H18V2ZM22 7.5C22 7.224 21.776 7 21.5 7C21.224 7 21 7.224 21 7.5C21 7.776 21.224 8 21.5 8C21.776 8 22 7.776 22 7.5ZM16 17H8V18H16V17Z" fill="#B3BAC0" />
        </svg>
        Print this page
      </PrintButton>
    </ContentContainer>
  </HeaderTag>
)
