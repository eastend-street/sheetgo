import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.orange};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: bold;
`

type HeaderProps = {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <StyledHeader>
    <Title>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </Title>
  </StyledHeader>
)

export default Header
