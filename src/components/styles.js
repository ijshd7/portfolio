import React, { useState, useEffect, useRef } from 'react'
import styled, { createGlobalStyle} from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as BellIcon } from '../images/bell.svg'
import { ReactComponent as MessengerIcon } from '../images/messenger.svg'
import { ReactComponent as CaretIcon } from '../images/caret.svg'
import { ReactComponent as PlusIcon } from '../images/plus.svg'
import { ReactComponent as CogIcon } from '../images/cog.svg'
import { ReactComponent as ChevronIcon } from '../images/chevron.svg'
import { ReactComponent as ArrowIcon } from '../images/arrow.svg'
import { ReactComponent as BoltIcon } from '../images/bolt.svg'

const GlobalStyles = createGlobalStyle`
  html {
    --bg:  #242526;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: 500ms; 
  }
`

const App = ({ children }) => (
    <>
        <GlobalStyles />
        {children}
    </>
)


