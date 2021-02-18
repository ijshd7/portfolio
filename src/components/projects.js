import React from "react";
import styled from "styled-components";
import floating1 from '../images/floatingstl1.png';
import floatingLogo from '../images/float-logo-teal.png';
import dogwood1 from '../images/dogwood1.png';
import dogwoodLogo from '../images/dogwood-advisors-vertical-logo.png';
import rise1 from '../images/riseCarousel3.png';
import riseLogo from '../images/rise-logo-white.png';
import coach1 from '../images/mycoachkevin1.png';
import coachLogo from '../images/logo.png';
import movet1 from '../images/movetiphone.png';
import movetLogo from '../images/movetLogoWithIcon.png'

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
        <div className="mt-6 text-center text-white font-mono antialiased">
            <h1 style={{fontSize: "8vh"}} className="mb-10">PROFESSIONAL PROJECTS</h1>
            <div className="flex-col lg:flex lg:flex-row mb-4">
                <div className="w-2/3 mb-6 lg:w-1/4 mx-auto">
                    <img className="" src={floating1} alt="Floating STL screenshot"/>
                    <a href="https://www.floatingstl.com/" target="_blank" rel="noreferrer">
                        <img className="mt-2 w-1/2 mx-auto" src={floatingLogo} alt="Floating STL logo"/>
                    </a>
                </div>
                <div className="w-2/3 mb-6 lg:w-1/4 mx-auto">
                    <img className="" src={dogwood1} alt="Dogwood Compliance screenshot"/>
                    <a href="https://dogwoodcompliance.com/" target="_blank" rel="noreferrer">
                        <img className="mt-2 mx-auto" src={dogwoodLogo} alt="Dogwood Compliance logo"/>
                    </a>
                </div>
                <div className="w-2/3 lg:w-1/4 mx-auto">
                    <img className="" src={rise1} alt="Rise Float Gathering screenshot"/>
                    <a href="https://risefloatgathering.com/" target="_blank" rel="noreferrer">
                        <img className="mt-2 w-1/2 mx-auto" src={riseLogo} alt="Rise Float Gathering logo"/>
                    </a>
                </div>
            </div>
            <div className="flex-col lg:flex lg:flex-row mt-6">
                <div className="w-2/3 lg:w-1/3 mx-auto mb-6">
                    <img className="" src={coach1} alt="Elevated Coaching screenshot"/>
                    <a href="https://mycoachkevin.com/" target="_blank" rel="noreferrer">
                        <img className="mt-2 w-1/2 mx-auto" src={coachLogo} alt="Elevated Coaching logo"/>
                    </a>
                </div>
                <div className="w-2/3 lg:w-1/3 mx-auto mb-6">
                    <img className="sm:h-1/3 lg:h-2/3 mx-auto" src={movet1} alt="Movet screenshot"/>
                    <a href="https://movetcare.com/" target="_blank" rel="noreferrer">
                        <img className="mt-2 mx-auto" src={movetLogo} alt="Movet logo"/>
                    </a>
                </div>
            </div>
        </div>
    </ProjectsWrapper>
)

export default Projects