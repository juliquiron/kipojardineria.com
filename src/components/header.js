import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import style from './header.module.scss'

const Image = () => (
  <StaticQuery
   query = {graphql`
      query {
        logo: file(relativePath: { eq: "header_logo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.logo.childImageSharp.fluid} alt="Kipo jardineria logo cabezera" />}
  />
  )

const Header = ({ siteTitle, siteDescription }) => (
  <header className={style.wrapper}>
      <h1 className={style.title}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
  <Image/>
        </Link>
      </h1>
      <h2 className={style.subtitle}>{siteDescription}</h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
