import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"

const StyledFooter = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  background-color: ${props => props.theme.colors.orange};
  color: #fff;
`

const Copyright = styled.p``

type FooterProps = {
  siteTitle: string
}

const Footer: React.FC<FooterProps> = ({ siteTitle }) => (
  <StyledFooter>
    <Copyright>
      &copy; {siteTitle} {new Date().getFullYear()} All rights reserved.
    </Copyright>
  </StyledFooter>
)

export default Footer
