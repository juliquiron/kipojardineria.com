import React from "react"
import {Container, Row, Col} from 'react-bootstrap'

import InsightBlock from '../components/insightBlock'

import style from './insights.module.scss'

const Insights = () => (
  <section className={style.wrapper}>
  <h2 className={style.title}>Nuestros servicions</h2>
  <Container>
    <Row>
      <Col>
        <InsightBlock
          name='test'
          title='test title'
          text='test text section'
        />
      </Col>
      <Col>
        <InsightBlock
          name='test'
          title='test title'
          text='test text section'
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <InsightBlock
          name='test'
          title='test title'
          text='test text section'
        />
      </Col>
      <Col>
        <InsightBlock
          name='test'
          title='test title'
          text='test text section'
        />
      </Col>
    </Row>
  </Container>
  </section>
)

export default Insights
