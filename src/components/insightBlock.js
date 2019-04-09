import PropTypes from "prop-types"
import React from "react"

import style from './insightBlock.module.scss'

const InsightBlock = ({ name, title, text}) => (
  <span className={`${style[name]} ${style.iconCard}`}>
    <h3>{title}</h3>
    <p>{text}</p>
  </span>
)

InsightBlock.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

InsightBlock.defaultProps = {
  name: ``,
  title: ``,
  text: ``,
}

export default InsightBlock
