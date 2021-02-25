import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import GoogleMap from '../GoogleMap/GoogleMap'
import { PortfolioLinks } from '../PortfolioLinks/PortfolioLinks'
import { QuotesBlock } from '../QuotesBlock/QuotesBlock'
import { SampleCode } from '../SampleCode/SampleCode'
import { SkillsExpList } from '../SkillsExpList/SkillsExpList'
import { MainItem } from './Item/MainItem'
import { StyledContainer } from './Main.styled'

export const Main: FC = () => (
  <StyledContainer>
    <Row>
      <Col md={3} sm={4} xs={12}>
        <MainItem itemHeader="Portfolio">
          <PortfolioLinks />
        </MainItem>
      </Col>
      <Col md={3} sm={4} xs={12}>
        <MainItem itemHeader="Experience">
          <SkillsExpList />
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
      <Col sm={12} md={6}>
        <MainItem>
          <GoogleMap />
        </MainItem>
      </Col>
    </Row>
  </StyledContainer>
)
