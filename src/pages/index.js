import React from "react"
import { Jumbo, SEO, Products } from "../components"

export const query = graphql`
query MyQuery {
  allStripeSku {
    edges {
      node {
        id
        price
        product {
          name
          metadata {
            description
            img
            wear
          }
        }
      }
    }
  }
}`

const IndexPage = ({data}) => (
  <>
    <SEO title="Home" />
    <Jumbo/>
    <Products product={data.allStripeSku.edges}/>
    </>
)

export default IndexPage
