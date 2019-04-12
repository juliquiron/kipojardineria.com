import React from "react"
import {Container, Row, Col} from 'react-bootstrap'

import InsightBlock from '../components/insightBlock'

import style from './insights.module.scss'

const Insights = () => (
  <section className={style.wrapper}>
  <h2 className={style.title}>Nuestros servicios</h2>
  <Container>
    <Row>
      <Col>
        <InsightBlock
          name='xero'
          title='Xerojardinería'
          text='Jardinería autosuficiente, optimizamos al máximo todos los recursos, en especial el agua.'
        />
      </Col>
      <Col>
        <InsightBlock
          name='ciru'
          title='Cirugía arbórea'
          text='Aumentamos el proceso de cicatrización y mejoramos la salud del arbol'
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <InsightBlock
          name='riego'
          title='Sistemas de riego'
          text='Instalación y mantenimiento de sistemas de riego eficientes.'
        />
      </Col>
      <Col>
        <InsightBlock
          name='rest'
          title='Restauración de jardines'
          text='Diseño y construcción de terrazas patios y jardines, creación de espacios para los más pequeños'
        />
      </Col>
    </Row>
  </Container>
  </section>
)

export default Insights
