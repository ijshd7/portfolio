import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import logo from "../images/isaiah-logo.png"

// logo
// wrapper
// hover effects
// navbar: home, portfolio, about, contact, blog?

const LogoWrapper = styled.a`
  display: inline-flex;
  margin: auto 5px;
  float: left;
`

const Header = () => (
  <LogoWrapper href="/">
    <img
      width="75"
      src={logo}
      alt="My Logo"
  />
  </LogoWrapper>
)

export default Header
