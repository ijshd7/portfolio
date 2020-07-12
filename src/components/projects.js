import React from "react"
import styled from "styled-components"
import movet from "../images/movetscreenshot.png"
import movetlogo from "../images/movetlogo.png"
import movetiphone1 from "../images/movetiphone.png"
import movetiphone2 from "../images/movetiphone2.png"
import riselogo from "../images/riselogo.png"
import rise1 from "../images/risescreenshot.png"
import rise2 from "../images/risescreenshot1.png"
import rise3 from "../images/risescreenshot2.png"
import rise4 from "../images/risescreenshot3.png"

// need to touchup pics in gimp: corners and greenspace on screenshot

// projects: movet, rise build
// carousel

const ProjectsWrapper = styled.section`
    background: linear-gradient(45deg, #11A49B, #90FC8E) no-repeat center top;
    background-size: contain;
    display: inline-block;
    position: relative;
    height: auto;
    width: 100%;
`

const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-evenly;
    max-width: 650px;
    overflow: hidden;
    font-weight: 300;
`

//movet
const Image = ({source1, source2}) => (
    <ImgWrapper>
        <img
            alt="pic"
            width="250px"
            src={source1}
            onMouseOver={e => (e.currentTarget.src = source2)}
            onMouseOut={e => (e.currentTarget.src = source1)}
        />
    </ImgWrapper>
)

//rise


const Projects = () => (
    <ProjectsWrapper>
        <div className="my-16 text-center text-white font-mono antialiased">
            <h1 style={{fontSize: "8vh"}} className="mb-8 ">PROJECTS</h1>
            <Image source1={movetiphone1} source2={movetiphone2} />
        </div>
    </ProjectsWrapper>
)

export default Projects