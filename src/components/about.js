import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLaptopCode, faCoffee } from '@fortawesome/free-solid-svg-icons'

// make container responsive with grid
// text responsive
// icons responsive
// clean up some text

const Columns = styled.div`
    display: flex;
    box-sizing: border-box;
    margin-top: -0.75rem;
    margin-bottom: 0.75rem;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    min-width: 100%;
    padding: 30px 0;
`

const Column = styled.div`
    display: block;
    box-sizing: inherit;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 10.5px;
    text-align: center;
`

const Content = styled.div`
    box-sizing: inherit;
    text-align: center;
`

const Header = styled.h1`
    font-weight: bold;
    margin-top: 1.3333em;
    margin-bottom: .6666em;
`

const About = () => (
    <Columns className="font-mono antialiased">
        <Column>
            <Content>
                <FontAwesomeIcon
                    icon={faCode}
                    className="text-6xl text-red-500 hover:text-red-300"
                />
                <Header className="text-3xl">Developer</Header>
                <p>I build websites, web apps, and software</p>
                <br />
                <p className="text-xl text-red-500 mt-8">Core Technologies:</p>
                <p className="mt-2 mx-10">HTML, CSS, URLs, HTTP, JavaScript, JSON, DOM, Web APIs, WCAG, and ARIA</p>
            </Content>
        </Column>
        <Column>
            <Content>
                <FontAwesomeIcon
                    icon={faLaptopCode}
                    className="text-6xl text-green-400 hover:text-green-300"
                />
                <Header className="text-3xl">Lifelong Learner</Header>
                <p>I love learning about the ecosystem of the web, and all the cool technologies it entails</p>
                <p className="text-xl text-green-400 mt-8">Libraries, Frameworks, Tools:</p>
                <p className="mt-2 mx-10">React, React Native, Gatsby, Tailwindcss, JSX, Node.js, Data Formats, REST APIs, Package Managers, SPA/PWAs, Linting, and so many more </p>
            </Content>
        </Column>
        <Column>
            <Content>
                <FontAwesomeIcon
                    icon={faCoffee}
                    className="text-6xl text-blue-500 hover:text-blue-300"
                />
                <Header className="text-3xl">Cool Dude</Header>
                <p>I truly enjoy meeting people from all walks of life and growing as a person</p>
                <p className="text-xl text-blue-500 mt-8">Experiences I draw from:</p>
                <p className="mt-2 mx-10">A career in healthcare, a burning interest in technology, and wanting the best for every person that I meet</p>
            </Content>
        </Column>
    </Columns>
)

export default About