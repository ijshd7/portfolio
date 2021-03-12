import React from "react";
import styled from "styled-components";
import computerPng from "../images/computer.png";
import computerWebp from "../images/computer.webp";
import logoPng from '../images/isaiah-logo.png';
import logoWebp from '../images/isaiah-logo.webp';

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
        <h1 className="z-10 text-black" style={{fontSize: "8vh"}}>Hi, my name is Isaiah!</h1>
        <p className="z-10 mt-2 mb-6 sm:mb-12 lg:mb-12 text-black" style={{fontSize: "5vh"}}>I build things</p>
        <picture className="z-10 -mb-24 lg:-mb-64 mx-auto block h-auto w-1/12">
            <source type="image/webp" srcSet={logoWebp}/>
            <source type="image/jpg" srcSet={logoPng}/>
            <img src={logoPng} alt="My avatar"/>
        </picture>
        <picture className="mt-10 mx-auto block h-auto w-1/2">
            <source type="image/webp" srcSet={computerWebp}/>
            <source type="image/png" srcSet={computerPng}/>
            <img src={computerPng} alt="Computer"/>
        </picture>
    </HeroWrapper>
)

export default Hero