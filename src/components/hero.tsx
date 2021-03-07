import React from "react";
import styled from "styled-components";
import avatarJpg from "../images/southParkAvatar.jpg";
import avatarWebp from "../images/southParkAvatar.webp";
import computerPng from "../images/computer.png";
import computerWebp from "../images/computer.webp";

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
        <p className="mt-2" style={{fontSize: "5vh"}}>I build things</p>
        <picture className="my-16 mx-auto block h-auto w-1/4">
            <source type="image/webp" srcSet={avatarWebp}/>
            <source type="image/jpg" srcSet={avatarJpg}/>
            <img src={avatarJpg} alt="My avatar"/>
        </picture>
        <picture className="mt-12 mx-auto block h-auto w-1/2">
            <source type="image/webp" srcSet={computerWebp}/>
            <source type="image/png" srcSet={computerPng}/>
            <img src={computerPng} alt="Computer"/>
        </picture>
    </HeroWrapper>
)

export default Hero