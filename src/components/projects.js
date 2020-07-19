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

const MovetWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-evenly;
    max-width: 650px;
    overflow: hidden;
    font-weight: 300;
`

//movet
const Movet = ({source1, source2}) => (
    <MovetWrapper>
        <img
            alt="pic"
            width="250px"
            src={source1}
            onMouseOver={e => (e.currentTarget.src = source2)}
            onMouseOut={e => (e.currentTarget.src = source1)}
        />
    </MovetWrapper>
)

const RiseWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-evenly;
    max-width: 450px;
    overflow: hidden;
    font-weight: 300;
`

//rise
const Rise = () => (
    <RiseWrapper>
        <RiseCarousel />
    </RiseWrapper>
)


const Projects = () => (
    <ProjectsWrapper>
        <div className="my-16 text-center text-white font-mono antialiased">
            <h1 style={{fontSize: "8vh"}} className="mb-8 ">PROJECTS</h1>
            <Movet source1={movetiphone1} source2={movetiphone2} />
            <Rise />
        </div>
    </ProjectsWrapper>
)

export default Projects