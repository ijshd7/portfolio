import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLaptopCode, faCoffee } from '@fortawesome/free-solid-svg-icons'

// make container responsive with grid
// text responsive
// icons responsive
// clean up some text

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

function AboutGrid(props) {
    return (
        <div className="font-mono antialiased">
            <Row>
                <Column xs="12" sm="4" md="6" lg="3" className="mt-4 text-center">
                    <FontAwesomeIcon
                        icon={faCode}
                        className="text-red-500 hover:text-red-300"
                        style={{fontSize: "8vh"}}
                    />
                    <h1 className="mt-4" style={{fontSize: "3vh"}}>Developer</h1>
                    <p className="mt-2" style={{fontSize: "2vh"}}>I build websites, web apps, and software</p>
                    <br />
                    <p style={{fontSize: "3vh"}} className="text-red-500 mt-4">Core Technologies:</p>
                    <p style={{fontSize: "2vh"}} className="mt-2 mx-10">HTML, CSS, URLs, HTTP, JavaScript, JSON, DOM, Web APIs, WCAG, and ARIA</p>
                </Column>
                <Column xs="12" sm="4" md="6" lg="6" className="mt-4 text-center">
                    <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="text-green-400 hover:text-green-300"
                        style={{fontSize: "8vh"}}
                    />
                    <h1 className="mt-4" style={{fontSize: "3vh"}}>Lifelong Learner</h1>
                    <p className="mt-2" style={{fontSize: "2vh"}}>I love learning about the ecosystem of the web, and all the cool technologies it entails</p>
                    <br />
                    <p style={{fontSize: "3vh"}} className="text-green-400 mt-4">Libraries, Frameworks, Tools:</p>
                    <p style={{fontSize: "2vh"}} className="mt-2 mx-10">React, React Native, Gatsby, Tailwindcss, JSX, Node.js, Data Formats, REST APIs, Package Managers, SPA/PWAs, Linting, and so many more </p>
                </Column>
                <Column xs="12" sm="4" md="6" lg="3" className="mt-4 text-center">
                    <FontAwesomeIcon
                        icon={faCoffee}
                        className="text-blue-500 hover:text-blue-300"
                        style={{fontSize: "8vh"}}
                    />
                    <h1 className="mt-4" style={{fontSize: "3vh"}}>Cool Dude</h1>
                    <p className="mt-2" style={{fontSize: "2vh"}}>I truly enjoy meeting people from all walks of life and growing as a person</p>
                    <br />
                    <p style={{fontSize: "3vh"}} className="text-blue-500 mt-4">Experiences I draw from:</p>
                    <p style={{fontSize: "2vh"}} className="mt-2 mx-10">A career in healthcare, a burning interest in technology, and wanting the best for every person that I meet</p>
                </Column>
            </Row>
        </div>
    )
}

const About = () => (
    <AboutGrid />
)

export default About