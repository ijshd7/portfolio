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
    let className = this.state.hovered ? 'bg-black border-black border-4 rounded-md w-16 h-16' : 'border-black border-4 rounded-md w-16 h-16';
    let src = this.state.hovered ? whitelogo : logo;
    return (
      <Link
        href="/"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleOut}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <span className="inline-flex">
          <img className={className} src={src} alt="Cat logo" />
        </span>
      </Link>
    )
  }
})

const Links = () => (
  <>
    <Link style={{fontSize: "3vh"}} className="mx-2" to="resume" >Resume</Link>
    <Link style={{fontSize: "3vh"}} className="mx-2" to="blog" >Blog</Link>
    <Link style={{fontSize: "3vh"}} className="mx-2" to="resources" >Resources</Link>
    <Link style={{fontSize: "3vh"}} className="mx-2" to="tutorials" >Tutorials</Link>
  </>
)

const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`

function getWidthString(span) {
  if (!span) return;

  let width = span / 12 * 100;
  return `width: ${width}%;`;
}

const Column = styled.div`
    float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 768px) {
      ${({ sm }) => sm && getWidthString(sm)};
    }

    @media only screen and (min-width: 992px) {
      ${({ md }) => md && getWidthString(md)};
    }

    @media only screen and (min-width: 1200px) {
      ${({ lg }) => lg && getWidthString(lg)};
    }
`

function HeaderGrid(props) {
    return (
        <div>
            <Row>
                <Column xs="12" sm="4" md="6" lg="3" className="mt-4 text-center">
                  <Logo />
                </Column>
                <Column xs="12" sm="4" md="6" lg="6" className="mt-4 text-center">
                  <Links />
                </Column>
                <Column xs="12" sm="4" md="6" lg="3" className="mt-4 text-center">
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