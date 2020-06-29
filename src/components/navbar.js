import React, { useState, useEffect, useRef } from 'react'
import "../styles/styles.css"
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import BellIcon from '../svg/bell.svg'
import MessengerIcon from '../svg/messenger.svg'
import CaretIcon from '../svg/caret.svg'
import PlusIcon from '../svg/plus.svg'
import CogIcon from '../svg/cog.svg'
import ChevronIcon from '../svg/chevron.svg'
import ArrowIcon from '../svg/arrow.svg'
import BoltIcon from '../svg/bolt.svg'

// localize everything
// add icons/links
// improve dropdown view

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: #151616;
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

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  svg { 
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }
`

const App = () => (
  <>
  <GlobalStyles />
  <Navbar>
    <NavItem icon={<PlusIcon />} />
    <NavItem icon={<BellIcon />} />
    <NavItem icon={<MessengerIcon />} />

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

const IconButtonA = styled.a`
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

    &:hover {
      filter: brightness(1.2);
    }
`

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Animals
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
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
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
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;