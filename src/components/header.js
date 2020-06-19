import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import logo from "../images/isaiah-logo.png"

// logo
// wrapper
// hover effects
// navbar: portfolio, about, contact, blog?

const HeaderWrapper = styled.div`
  display: inline-flex;
  margin: auto 5px;
  float: left;
`

const Header = () => (
  <HeaderWrapper>
    <img
      width="125"
      src={logo}
      alt="MY LOGO YO LOL"
    />
  </HeaderWrapper>
)

export default Header
