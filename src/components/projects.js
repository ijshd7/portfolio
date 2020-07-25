import React from "react"
import styled from "styled-components"
import movetLogo from "../images/movetlogo.png"
import movetIphone1 from "../images/movetiphone.png"
import movetIphone2 from "../images/movetiphone2.png"
import riseLogo from "../images/riselogo.png"
import RiseCarousel from "./riseCarousel"

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

const ProjectsWrapper = styled.section`
    background: linear-gradient(45deg, #11A49B, #90FC8E) no-repeat center top;
    background-size: contain;
    display: inline-block;
    position: relative;
    height: auto;
    width: 100%;
    padding-bottom: 4rem;
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
        <a
            href="https://apps.apple.com/us/app/movet-on-demand-vet-services/id1478031556"
            target="_blank"
            rel="noreferrer"
        >
            <img
                className="block mt-2 mx-auto rounded-full transform scale-75"
                src={movetLogo}
                alt="Movet Logo"
            />
        </a>
        <p className="block mt-2">Telehealth for your pets!</p>
    </div>
)

const RiseWrapper = styled.div`
    @media only screen and (min-width: 768px) {
        margin-top: 5rem;
        margin-right: 8rem;
        max-width: 650px;
    }
    max-width: 550px;
`

const Rise = () => (
    <RiseWrapper>
        <RiseCarousel className="block" />
        <a
            href="https://risefloatgathering.com/"
            target="_blank"
            rel="noreferrer"
        >
            <img
                className="block mt-2 mx-auto py-2 px-4 rounded-full"
                src={riseLogo}
                alt="Rise Logo"
            />
        </a>
        <p className="block mt-2">Float Community Gathering</p>
    </RiseWrapper>
)

const MovetRise = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
`


const Projects = () => (
    <ProjectsWrapper>
        <div className="my-16 text-center text-white font-mono antialiased">
            <h1 style={{fontSize: "8vh"}} className="mb-10 ">PROFESSIONAL PROJECTS</h1>
            <Row>
                <Column xs="12" sm="6" md="6" lg="6">
                    <MovetRise>
                        <Movet source1={movetIphone1} source2={movetIphone2} />
                    </MovetRise>
                </Column>
                <Column xs="12" sm="6" md="6" lg="6" className="mt-16">
                    <MovetRise>
                        <Rise />
                    </MovetRise>
                </Column>
            </Row>
        </div>
    </ProjectsWrapper>
)

export default Projects