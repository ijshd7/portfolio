import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    overflow-x: hidden;
  }

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

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <Navbar />
                {children}
            <Footer />
        </>
    )
}