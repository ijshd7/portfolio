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
    background: linear-gradient(45deg, #11A49B, #90FC8E);
    height: 100%;
    width: 100%;
`

const Logo = () => (
    <div className="text-center pt-10 mb-10">
        <Link href="/">
            <img className="inline-block mr-auto ml-auto" src={logo} alt="Cat logo" width="100"/>
        </Link>
    </div>
)

const Footer = () => (
    <FooterWrapper>
        <Logo />
        <div className="text-center">
            <FontAwesomeIcon
                icon={['fab', 'github']}
                className=" text-5xl mx-8 text-white hover:text-green-400 hover:bg-white rounded-full h-8 w-8"
            />
            <FontAwesomeIcon
                icon={['fab', 'linkedin-in']}
                className=" text-5xl mx-8 text-white hover:text-green-400 hover:bg-white rounded-full h-8 w-8"
            />
            <FontAwesomeIcon
                icon={['fab', 'codepen']}
                className=" text-5xl mx-8 text-white hover:text-green-400 hover:bg-white rounded-full h-8 w-8"
            />
            <FontAwesomeIcon
                icon="envelope"
                className=" text-5xl mx-8 text-white hover:text-green-400 hover:bg-white rounded-full h-8 w-8"
            />
        </div>
        <p className="text-3xl text-center text-white mt-10 pb-4 font-mono antialiased">Created with love by Isaiah 2020</p>
    </FooterWrapper>
)

export default Footer