import React from "react"
import styled from "styled-components"
import movet from "../images/movetscreenshot.png"
import movetlogo from "../images/movetlogo.png"
import movetiphone1 from "../images/movetiphone.png"
import movetiphone2 from "../images/movetiphone2.png"
import riselogo from "../images/riselogo.png"
import RiseCarousel from "./riseCarousel"

// need to touchup pics in gimp: corners and greenspace on screenshot

const ProjectsWrapper = styled.section`
    background: linear-gradient(45deg, #11A49B, #90FC8E) no-repeat center top;
    background-size: contain;
    display: inline-block;
    position: relative;
    height: auto;
    width: 100%;
`

const Movet = ({source1, source2}) => (
    <div>
        <img
            className="block"
            alt="Movet Screenshot"
            width="250px"
            src={source1}
            onMouseOver={e => (e.currentTarget.src = source2)}
            onMouseOut={e => (e.currentTarget.src = source1)}
        />
        <img
            className="block mt-2"
            src={movetlogo}
        />
        <p className="block mt-2">MOVET: Telehealth for your pets!</p>
    </div>
)

const RiseWrapper = styled.div`
    max-width: 550px;
`

const Rise = () => (
    <RiseWrapper>
        <RiseCarousel className="block" />
        <img
            className="block mt-2 mx-auto py-2 px-4 rounded-full"
            src={riselogo}
        />
        <p className="block mt-2">RISE: Float Community Gathering</p>
    </RiseWrapper>
)

// Projects
const MovetRise = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-evenly;
`


const Projects = () => (
    <ProjectsWrapper>
        <div className="my-16 text-center text-white font-mono antialiased">
            <h1 style={{fontSize: "8vh"}} className="mb-8 ">PROJECTS</h1>
            <MovetRise>
                <Movet source1={movetiphone1} source2={movetiphone2} />
                <Rise />
            </MovetRise>
        </div>
    </ProjectsWrapper>
)

export default Projects