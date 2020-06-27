import React from "react"
import styled from "styled-components"
import avatar from "../images/southParkAvatar.jpg"
import computer from "../images/computer.png"

const HeroWrapper = styled.section`
    background-color: white;
    color: #0a0a0a;
    padding-top: 4rem;
    align-items: stretch;
    display: flex;
    border: 0;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    vertical-align: baseline;
    text-rendering: auto;
    text-size-adjust: 100%;
    max-height: 100%;
    max-width: 100%;
    font-family: 'Monoton', cursive;
`

const Hero = () => (
    <HeroWrapper>
        <h1 style={{fontSize: "8vh"}}>Hi, my name is Isaiah!</h1>
        <p className="mt-2" style={{fontSize: "4vh"}}>I like to build things</p>
        <img className="my-12 mx-auto block" src={avatar} alt="My avatar" width="150" />
        <img className="mt-12 mx-auto block" src={computer} alt="Computer" width="50%" />
    </HeroWrapper>
)

export default Hero