import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons'

// web developer,software dev, cool dude

// fontawesome icons
// technologies: html,css,js,react,gatsby,node,styled components,tailwindcss,postcss,jest, etc
// categories: frameworks/libraries, testing, style, web apis, cross-platform
// tools

// columns, then column

// need to restructure this to accomodate ^



const About = () => (
    <div className="text-center text-6xl">
        <FontAwesomeIcon 
            icon={faCode}
            className="mx-24 text-red-500 hover:text-red-300"
        />
        <FontAwesomeIcon
            icon={faLaptopCode}
            className="mx-24 text-green-400 hover:text-green-300"
        />
        <FontAwesomeIcon
            icon={faCoffee}
            className="mx-24 text-blue-500 hover:text-blue-300"
        />
    </div>
)

export default About