import React, { FC, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../../init/rootReducer'
import { CvState } from '../../../../reducers/CvReducer'
import { setSkillExperience } from '../../actions'
import { MainItem } from './Item/MainItem'
import {
  Experience, PortfolioLink, StringsList, StyledContainer, ExpInput,
} from './Main.styled'

export const Main: FC = () => {
  const { skills } = useSelector<AppState, CvState>((state) => state.CvReducer)
  const [skillIdToShow, setSkillIdToShow] = useState('')
  const dispatch = useDispatch()

  const inputOnBlur = (id: string, value: string) => {
    if (!Number.isNaN(+value) && +value >= 0 && !!value) {
      dispatch(setSkillExperience(id, +value))
    }
    setSkillIdToShow('')
  }
  return (
    <StyledContainer>
      <Row>
        <Col md={3} sm={4} xs={12}>
          <MainItem itemHeader="Portfolio">
            <StringsList>
              <li>
                <PortfolioLink href="https://hh.ru/resume/f9bfaafaff07e8c6060039ed1f367374556b63">
                  Bootstrap 4 Material Design (Sample Link)
                </PortfolioLink>
              </li>
              <li>
                <PortfolioLink href="https://hh.ru/resume/f9bfaafaff07e8c6060039ed1f367374556b63">
                  Modern JavaScript stack
                </PortfolioLink>
              </li>
              <li>
                <PortfolioLink href="https://hh.ru/resume/f9bfaafaff07e8c6060039ed1f367374556b63">
                  Datepicker for twitter bootstrap
                </PortfolioLink>
              </li>
              <li>
                <PortfolioLink href="https://hh.ru/resume/f9bfaafaff07e8c6060039ed1f367374556b63">
                  Fast and reliable Bootstrap widgets in Angular
                  {' '}
                </PortfolioLink>
              </li>
            </StringsList>
          </MainItem>
        </Col>
        <Col md={3} sm={4} xs={12}>
          <MainItem itemHeader="Experience">
            <StringsList fw={700}>
              {skills
                .sort((a, b) => b.experience - a.experience)
                .map((item) => (
                  <li key={item.id}>
                    {item.skill}
                    {skillIdToShow === item.id ? (
                      <ExpInput onBlur={(e) => inputOnBlur(item.id, e.target.value)} autoFocus />
                    ) : (
                      <Experience onClick={() => setSkillIdToShow(item.id)}>
                        {item.experience ? `${item.experience} years` : 'Set exp'}
                      </Experience>
                    )}
                  </li>
                ))}
            </StringsList>
          </MainItem>
        </Col>
        <Col md={3} sm={4} xs={12}>
          <MainItem itemHeader="Sample code">
            <p>123</p>
          </MainItem>
        </Col>
        <Col md={3} sm={4} xs={12}>
          <MainItem itemHeader="Availability">
            <p>Full time</p>
            <MainItem itemHeader="Prefered environment">
              <p>GitHub, Mac OSX</p>
            </MainItem>
          </MainItem>
        </Col>
        <Col md={3} sm={4} xs={12}>
          <MainItem itemHeader="In clients I look for...">
            <p>123</p>
          </MainItem>
        </Col>
        <Col md={3} sm={4} xs={12}>
          <MainItem itemHeader="The Most Amazing...">
            <p>123</p>
          </MainItem>
        </Col>
        <Col sm={6} xs={12}>
          <MainItem itemHeader="The Most Amazing...">
            <p>123</p>
          </MainItem>
        </Col>
      </Row>
    </StyledContainer>
  )
}
