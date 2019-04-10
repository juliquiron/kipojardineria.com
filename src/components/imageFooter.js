import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageFooter = () => (
  <StaticQuery
   query = {graphql`
      query {
        logo: file(relativePath: { eq: "footer_logo.png" }) {
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
    render={data => <Img fluid={data.logo.childImageSharp.fluid} alt="Kipo jardineria logo pie" />}
  />
  )
export default ImageFooter
