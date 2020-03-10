import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Container = styled.div`
  max-width: 1000px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image imageName="gatsby-astronaut.png"/>
      </div>
      <ul>{/* show json data here */}</ul>
    </Container>
  </Layout>
)

export default IndexPage
