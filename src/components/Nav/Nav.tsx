import { Link } from "gatsby"
import styled from "styled-components"
import React, { useState } from "react"

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  background-color: #fff;
  ul {
    width: 30%;
    display: flex;
    justify-content: space-between;

    li {
      width: 5rem;
      text-align: center;
      font-size: ${props => props.theme.fontSizes.small};
      font-weight: bold;
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Nav: React.FC = () => {
  const [selected, setSelected] = useState(0)
  return (
    <Container>
      <ul>
        <li>
          <StyledLink to="/">List</StyledLink>
        </li>
        <li>
          <StyledLink to="/filter">Filter</StyledLink>
        </li>
        <li>
          <StyledLink to="/map">Map</StyledLink>
        </li>
      </ul>
    </Container>
  )
}

export default Nav
