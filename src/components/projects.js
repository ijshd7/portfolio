import React from "react";
import styled from "styled-components";
import floating1 from '../images/floatingstl1.png';
import floatingLogo from '../images/float-logo-teal.png';

const ProjectsWrapper = styled.section`
    background: linear-gradient(45deg, #11A49B, #90FC8E) no-repeat center top;
    background-size: contain;
    display: inline-block;
    position: relative;
    height: auto;
    width: 100%;
    padding-bottom: 4rem;
`

const Projects = () => (
    <ProjectsWrapper>
        <div className="my-16 text-center text-white font-mono antialiased">
            <h1 style={{fontSize: "8vh"}} className="mb-10">PROFESSIONAL PROJECTS</h1>
            <div className="flex mb-2">
                <img className="w-1/3 mx-auto" src={floating1} alt="float screenshot" />
                <img className="w-1/3 mx-auto" src={floatingLogo} alt="float logo" />
            </div>
        </div>
    </ProjectsWrapper>
)

export default Projects