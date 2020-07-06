import React, { useState, useEffect, useRef } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from "gatsby"
import { CSSTransition } from 'react-transition-group'
import "../styles/transitions.css"
import logo from "../images/isaiah-logo-white.png"
import MessengerIcon from '../svg/messenger.svg'
import CaretIcon from '../svg/caret.svg'
import CogIcon from '../svg/cog.svg'
import ChevronIcon from '../svg/chevron.svg'
import ArrowIcon from '../svg/arrow.svg'
import BoltIcon from '../svg/bolt.svg'
import DeskIcon from "../svg/desk.svg"
import MeteorIcon from "../svg/meteorwhite.svg"
import EmailIcon from "../svg/email.svg"
import LinkedinIcon from "../svg/linkedin.svg"
import CodepenIcon from "../svg/codepen.svg"
import HtmlIcon from "../svg/html.svg"
import CssIcon from "../svg/css.svg"
import JavaScriptIcon from "../svg/javascript.svg"
import NodeIcon from "../svg/nodejs.svg"
import GatsbyIcon from "../svg/gatsby.svg"
import TeamIcon from "../svg/team.svg"
import People1 from "../svg/people1.svg"
import People2 from "../svg/people2.svg"
import People3 from "../svg/people3.svg"
import People4 from "../svg/people4.svg"

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  :root {
    --bg:  #242526;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: 500ms; 
  }

  svg { 
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }
`

const ImgWrapper = styled.img`
  fill: var(--text-color);
  width: 20px;
  height: 20px;
`

const Logo = () => (
  <ImgWrapper src={logo} alt="Cat logo" />
)

const App = () => (
  <>
  <GlobalStyles />
  <Navbar>
    <NavItem
      icon={<a href="https://www.linkedin.com/in/isaiah-sherrill-ab58b970" target="_blank" aria-label="LinkedIn" rel="noreferrer"><LinkedinIcon /></a>} />
    <NavItem
      icon={<a href="https://codepen.io/ijshd7" target="_blank" aria-label="Codepen" rel="noreferrer"><CodepenIcon /></a>} />
    <NavItem
      icon={<a href="mailto:ijshd7@mail.missouri.edu" target="_blank" aria-label="Email" rel="noreferrer"><MessengerIcon /></a>} />
    <NavItem icon={<Link to="/"><Logo /></Link>} />
    <NavItem icon={<CaretIcon />}>
      <DropdownMenu></DropdownMenu>
    </NavItem>
  </Navbar>
  </>
)

const Navbar = (props) => (
  <Nav>
    <NavNav>{props.children}</NavNav>
  </Nav>
)

const Nav = styled.nav`
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: var(--border);
`

const NavNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <NavItemLi>
      <IconButtonA href="#" onClick={() => setOpen(!open)}>
        {props.icon}
      </IconButtonA>

      {open && props.children}
    </NavItemLi>
  );
}

const NavItemLi = styled.li`
    width: calc(var(--nav-size) * 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`

const IconButtonA = styled.button`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  color: var(--text-color);
  text-decoration: none;
  outline: 0 !important;
  box-shadow: none;

  &:hover {
    filter: brightness(1.2);
  }
`

const MenuItemA = styled.label`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  color: var(--text-color);
  text-decoration: none;
  outline: none;
  box-shadow: none;


  &:hover {
    background-color: #525357;
  }
`

const IconButtonSpan = styled.span`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  margin-right: 0.5rem;

  &:hover {
    filter: none;
  }
`

const IconRightSpan = styled.span`
  margin-left: auto;
`

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const DropdownItem = (props) => (
    <MenuItemA href="#" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
      <IconButtonSpan>{props.leftIcon}</IconButtonSpan>
      {props.children}
      <IconRightSpan>{props.rightIcon}</IconRightSpan>
    </MenuItemA>
  )

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon={<Logo />}
          >
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Core Technologies
          </DropdownItem>
          <DropdownItem
            leftIcon={<MeteorIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Blog (COMING SOON!)
          </DropdownItem>
          <DropdownItem
            leftIcon={<DeskIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Resources (COMING SOON!)
          </DropdownItem>
          <DropdownItem
            leftIcon={<BoltIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Tutorials (COMING SOON!)
          </DropdownItem>
          <DropdownItem
            leftIcon={<MessengerIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="contact">
            Contact Me
          </DropdownItem>
          <DropdownItem
            leftIcon={<TeamIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="tributes">
            Icon Tributes!
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Back</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<HtmlIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<CssIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<JavaScriptIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<GatsbyIcon />}>Gatsby</DropdownItem>
          <DropdownItem leftIcon={<NodeIcon />}>Node</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Back</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🝸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Dinosaur?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'contact'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Back</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<EmailIcon />}>Email</DropdownItem>
          <DropdownItem leftIcon={<LinkedinIcon />}>LinkedIn</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'tributes'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Back</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<People1 />}>Freepik</DropdownItem>
          <DropdownItem leftIcon={<People2 />}>Nhor Pai</DropdownItem>
          <DropdownItem leftIcon={<People3 />}>Good Ware</DropdownItem>
          <DropdownItem leftIcon={<People4 />}>Icon King</DropdownItem>
          <DropdownItem leftIcon={<People1 />}>Raj Dev</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;