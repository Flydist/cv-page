import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import avatarImg from '../../../../assets/images/avatar.jpg'
import languageFlag from '../../../../assets/images/gb.png'
import { StyledInput } from '../../../../components/Input/Input.styled'
import {
  HeaderTag,
  ContentContainer,
  UserImage,
  UserInfo,
  UserLanguage,
  SkillsBlock,
  Skill,
  PrintButton,
  AddSkillButton,
  SkillInput,
} from './Header.styled'
import { AppState } from '../../../../init/rootReducer'
import { CvState } from '../../../../reducers/CvReducer'
import {
  addNewSkill, deleteSkill, setFullname, setLocation,
} from '../../actions'

export const Header: FC = () => {
  const { fullname, location, skills } = useSelector<AppState, CvState>((state) => state.CvReducer)
  const dispatch = useDispatch()
  const [isInputShown, setIsInputShown] = useState(false)

  return (
    <HeaderTag>
      <ContentContainer>
        <UserImage src={avatarImg} alt="userImg" />
        <form>
          <UserInfo>
            <StyledInput
              fs={2.5}
              fw={500}
              defaultValue={fullname}
              name="fullname"
              onBlur={(e) => {
                const { value } = e.target
                if (value) {
                  dispatch(setFullname(value))
                }
              }}
            />
            <StyledInput
              fw={400}
              defaultValue={location}
              name="location"
              onBlur={(e) => {
                const { value } = e.target
                if (value) {
                  dispatch(setLocation(value))
                }
              }}
            />
            <UserLanguage>
              <img src={languageFlag} alt="flag" />
              English
            </UserLanguage>
            <SkillsBlock>
              {skills
                .sort((a, b) => b.experience - a.experience)
                .map((item) => (
                  <Skill key={item.id} onClick={() => dispatch(deleteSkill(item.id))}>
                    {item.skill}
                  </Skill>
                ))}
              {isInputShown ? (
                <SkillInput
                  autoFocus
                  onBlur={(e) => {
                    const { value } = e.target
                    setIsInputShown(false)
                    if (value) {
                      dispatch(
                        addNewSkill({
                          skill: value,
                          experience: 0,
                          id: uuidv4(),
                        }),
                      )
                    }
                  }}
                />
              ) : (
                <AddSkillButton onClick={() => setIsInputShown(true)}>+</AddSkillButton>
              )}
            </SkillsBlock>
          </UserInfo>
        </form>
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
      </ContentContainer>
    </HeaderTag>
  )
}
