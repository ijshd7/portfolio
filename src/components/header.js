import React from "react"
import styled from "styled-components"
import logo from "../images/isaiah-logo.png"
import whitelogo from "../images/isaiah-logo-white.png"

const createReactClass = require('create-react-class');

const LogoWrapper = styled.a`
  display: inline-flex;
  margin: 20px 20px;
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
    let className = this.state.hovered ? 'bg-black border-white border rounded-md' : 'border-black border rounded-md';
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
    className="border-black border-solid border-2 hover:border-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded inline-flex float-right m-10"
  >
    Let's chat
  </button>
)

const Header = () => (
  <>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <ChatButton />
  </>
)

export default Header
