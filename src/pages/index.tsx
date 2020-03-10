import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/List/List"

const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allWashroomListJson {
        edges {
          node {
            id
            evaluation
            isFree
            isWifi
            keyNeeded
            name
            thumbnail
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <ul>
          {data.allWashroomListJson.edges.map((washroom, index) => {
            return <List data={washroom.node} index={index} key={index} />
          })}
        </ul>
      </Container>
    </Layout>
  )
}
export default IndexPage
