import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../images/isaiah-logo.png"
import whitelogo from "../images/isaiah-logo-white.png"

const createReactClass = require('create-react-class');

const Logo = createReactClass({
  getInitialState: function () {
    return {
      hovered: false,
      focused: false,
      blurred: true,
    };
  },

  handleHover: function () {
    this.setState({ hovered: true, });
  },

  handleOut: function () {
    this.setState({ hovered: false, });
  },

  handleFocus: function () {
    this.setState({ focused: true, blurred: false });
  },

  handleBlur: function () {
    this.setState({ focused: false, blurred: true });
  },

  render: function () {
    let className = this.state.hovered ? 'bg-black border-white border-4 rounded-md w-1 h-auto' : 'border-black border-4 rounded-md w-1 h-auto';
    let src = this.state.hovered ? whitelogo : logo;
    return (
      <a 
        href="/"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleOut}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <span className="inline-flex">
          <img className={className} src={src} alt="Cat logo" />
        </span>
      </a>
    )
  }
})

const Links = () => (
  <>
    <Link className="text-3xl mx-2" to="blog" >Blog</Link>
    <Link className="text-3xl mx-2" to="resources" >Resources</Link>
    <Link className="text-3xl mx-2" to="resume" >Resume</Link>
    <Link className="text-3xl mx-2" to="tutorials" >Tutorials</Link>
  </>
)

const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`

const Column = styled.div`
    float: left;
    width: 100%;

    @media only screen and (min-width: 768px) {
        width: ${props => (props.span ? props.span / 12 * 100 : "8.33")}%;
    }
`

function HeaderGrid(props) {
    return (
        <div>
            <Row>
                <Column className="mt-4 text-center" span="3">
                  <Logo />
                </Column>
                <Column className="mt-4 text-center" span="6">
                  <Links />
                </Column>
                <Column className="mt-4 text-center" span="3">
                  <ChatButton />
                </Column>
            </Row>
        </div>
    )
}

const ChatButton = () => (
  <button
    className="border-black border-solid border-2 hover:border-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full"
  >
    Let's Chat
  </button>
)

const Header = () => (
    <HeaderGrid />
)

export default Header