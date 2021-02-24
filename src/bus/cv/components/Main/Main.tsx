import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useCvState } from '../../hooks/useCvState'
import GoogleMap from '../GoogleMap/GoogleMap'
import { QuotesBlock } from '../QuotesBlock/QuotesBlock'
import { SampleCode } from '../SampleCode/SampleCode'
import { SkillButtonsList } from '../SkillButtonsList/SkillButtonsList'
import { MainItem } from './Item/MainItem'
import {
  PortfolioLink, StringsList, StyledContainer,
} from './Main.styled'

export const Main: FC = () => {
  const { location } = useCvState()

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
            <SkillButtonsList />
          </MainItem>
        </Col>
        <Col md={3} sm={4} xs={12}>
          <MainItem itemHeader="Sample code">
            <SampleCode />
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
          <MainItem itemHeader="The Most Amazing...">
            <QuotesBlock text="The only true wisdom is in knowing you know nothing..." />
          </MainItem>
        </Col>
        <Col md={3} sm={4} xs={12}>
          <MainItem itemHeader="In clients I look for...">
            <QuotesBlock text="There is only one good, knowledge, and one evil, ignorance." />
          </MainItem>
        </Col>
        <Col sm={6} xs={12}>
          <MainItem>
            <GoogleMap location={location} />
          </MainItem>
        </Col>
      </Row>
    </StyledContainer>
  )
}
