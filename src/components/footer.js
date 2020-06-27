import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from "../images/isaiah-logo-white.png"

library.add(fab, faEnvelope)

const FooterWrapper = styled.div`
    background: linear-gradient(45deg, #11A49B, #90FC8E) no-repeat center top;
    background-size: contain;
    display: inline-block;
    position: relative;
    height: auto;
    width: 100%;
    text-align: center;
`

const Logo = () => (
    <Link to="/">
        <span className="inline-flex">
            <img className="mx-8 w-8 h-8" src={logo} alt="Cat logo" />
        </span>
    </Link>
)

const Footer = () => (
    <FooterWrapper className="py-4">
        <div>
            <a
                href="https://github.com/ijshd7"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className="mx-8 text-white h-8 w-8"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/isaiah-sherrill-ab58b970"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon
                    icon={['fab', 'linkedin-in']}
                    className="mx-8 text-white h-8 w-8"
                />
            </a>
            <a
                href="https://codepen.io/ijshd7"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon
                    icon={['fab', 'codepen']}
                    className="mx-8 text-white h-8 w-8"
                />
            </a>
            <a
                href="mailto:ijshd7@mail.missouri.edu"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon
                    icon="envelope"
                    className="mx-8 text-white h-8 w-8"
                />
            </a>
            <Logo />
        </div>
        <p 
            style={{fontSize: "4vh"}}
            className="text-center text-white mt-10 pb-4 font-mono antialiased"
        >
            Created with love by Isaiah 2020
        </p>
    </FooterWrapper>
)

export default Footer