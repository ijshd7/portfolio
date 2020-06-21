import React from "react"
import styled from "styled-components"
import logo from "../images/isaiah-logo.png"
import whitelogo from "../images/isaiah-logo-white.png"

const createReactClass = require('create-react-class');

const LogoWrapper = styled.a`
  display: inline-flex;
  margin: 25px 25px;
  float: left;
`

const Logo = createReactClass({
  getInitialState: function () {
    return {
      hovered: false,
      focused: false,
      blurred: true,
    };
  },

  handleHover: function () {
    this.setState({ hovered: true, focused: true, blurred: false, });
  },

  handleOut: function () {
    this.setState({ hovered: false, focused: false, blurred: true });
  },

  render: function () {
    let className = this.state.hovered ? 'bg-black border-white border-4 rounded-md' : 'border-black border-4 rounded-md';
    let src = this.state.hovered ? whitelogo : logo;
    let isFocused = this.state.focused ? "true" : "false";
    let isBlurred = this.state.blurred ? "true" : "false";
    return (
      <a 
        href="/"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleOut}
        onFocus={isFocused}
        onBlur={isBlurred}
      >
        <img className={className} src={src} alt="Cat logo" width="75" />
      </a>
    )
  }
});

const ChatButton = () => (
  <button
    className="border-black border-solid border-2 hover:border-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full inline-flex float-right mt-10 mr-12"
  >
    Let's Chat
  </button>
)

const HeaderWrapper = styled.nav`
  padding: 1.2rem 0;
  box-shadow: none;
  z-index: auto;
  background-color: white;
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  text-rendering: auto;
  text-size-adjust: 100%;
`

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <ChatButton />
  </HeaderWrapper>
)

export default Header
