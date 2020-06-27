import React from "react"
import styled from "styled-components"

// screenshots of projects / mobile views
// projects: movet, rise build, 
// carousel

const ProjectsWrapper = styled.section`
    background: linear-gradient(45deg, #11A49B, #90FC8E) no-repeat center top;
    background-size: contain;
    display: inline-block;
    position: relative;
    height: auto;
    width: 100%;
`

const Projects = () => (
    <ProjectsWrapper>
        <div className="my-16 text-center text-white font-mono antialiased">
            <h1 style={{fontSize: "8vh"}} className="mb-8 ">PROJECTS</h1>
            <p style={{fontSize: "6vh"}} className="mt-auto">Coming Soon...</p>
        </div>
    </ProjectsWrapper>
)

export default Projects