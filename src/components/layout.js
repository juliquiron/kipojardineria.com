/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import ImageFooter from './imageFooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
        <div
          style={{
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            <a href="http://kipojardineria.com" alt="Kipo jardineria"><ImageFooter/ ><div>kipojardineria.com</div></a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
