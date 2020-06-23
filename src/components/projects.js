import React from "react"
import styled from "styled-components"

// screenshots of projects / mobile views
// projects: movet, rise build, 
// carousel

const ProjectsWrapper = styled.section`
    background: linear-gradient(45deg, #11A49B, #90FC8E);
    height: 100%;
    width: 100%;
    padding: 3rem 1.5rem;
`

const Header = styled.h1`
    color: white;
    font-size: 2.5rem;
    text-align: center;
`

const Projects = () => (
    <ProjectsWrapper>
        <Header>PROJECTS</Header>
        <p className="text-3xl text-center text-white mt-10 font-mono antialiased">Coming Soon...</p>
    </ProjectsWrapper>
)

export default Projects