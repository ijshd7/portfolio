import React from "react"
import styled from "styled-components"
import logo from "../images/isaiah-logo.png"

const LogoWrapper = styled.a`
  display: inline-flex;
  margin: 20px 20px;
  float: left;
`

const ChatButton = () => (
  <button
    className="border-black border-solid border-2 hover:border-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded inline-flex float-right m-10"
  >
    Let's chat
  </button>
)

const Header = () => (
  <>
    <LogoWrapper href="/">
      <img
        width="75"
        src={logo}
        alt="My Logo"
    />
    </LogoWrapper>
    <ChatButton />
  </>
)

export default Header
