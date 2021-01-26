import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { CSSTransition } from 'react-transition-group'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/transitions.css"
import logo from "../images/isaiah-logo-white.png"
import MessengerIcon from '../svg/messenger.svg'
import CaretIcon from '../svg/caret.svg'
import ChevronIcon from '../svg/chevron.svg'
import ArrowIcon from '../svg/arrow.svg'
import EmailIcon from "../svg/email.svg"
import LinkedinIcon from "../svg/linkedin.svg"
import CodepenIcon from "../svg/codepen.svg"
import PhoneIcon from "../svg/phone.svg"

library.add(fab)

const ImgWrapper = styled.img`
  fill: var(--text-color);
  width: 20px;
  height: 20px;
`

const Logo = () => (
  <ImgWrapper width="20px" height="20px" src={logo} alt="Cat logo" />
)

const App = () => (
  <Navbar>
    <NavItem
      icon={<a href="https://www.linkedin.com/in/isaiah-sherrill-ab58b970" target="_blank" aria-label="LinkedIn" rel="noreferrer"><LinkedinIcon /></a>} />
    <NavItem
      icon={<a href="https://codepen.io/ijshd7" target="_blank" aria-label="Codepen" rel="noreferrer"><CodepenIcon /></a>} />
    <NavItem
      icon={<a href="https://github.com/ijshd7" target="_blank" aria-label="Github" rel="noreferrer" className="h-full w-full"><FontAwesomeIcon className="h-full w-full" icon={['fab', 'github']} /></a>} />
    <NavItem
      icon={<a href="mailto:ijshd7@mail.missouri.edu" target="_blank" aria-label="Email" rel="noreferrer"><MessengerIcon /></a>} />
    <NavItem icon={<Link to="/"><Logo /></Link>} />
    <NavItem icon={<CaretIcon />}>
      <DropdownMenu />
    </NavItem>
  </Navbar>
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
    setMenuHeight(dropdownRef.current.firstChild.offsetHeight)
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
            leftIcon={<MessengerIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="contact">
            Contact Me
          </DropdownItem>
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
          <a href="mailto:ijshd7@mail.missouri.edu" target="_blank" aria-label="Email" rel="noreferrer">
            <DropdownItem leftIcon={<EmailIcon />}>Email</DropdownItem>
          </a>
          <a href="https://www.linkedin.com/in/isaiah-sherrill-ab58b970" target="_blank" aria-label="LinkedIn" rel="noreferrer">
            <DropdownItem leftIcon={<LinkedinIcon />}>LinkedIn</DropdownItem>
          </a>
          <DropdownItem leftIcon={<PhoneIcon />}>314-568-7576</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;