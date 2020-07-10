import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import movet from "../images/movetscreenshot.png"
import rise from "../images/risescreenshot.png"
import movetlogo from "../images/movetlogo.png"
import riselogo from "../images/riselogo.png"


// need to add projects, build testimonial section
// use grid layout inspiration and possibly change theming to dark
// AND/OR add dark/light theme

//large grid for main page.. and centered stuff for homepage?

// color: #f4bb45
// text-red-500

// more projects

const Header = styled.h1`
    text-align: center;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    position: relative;
    float: left;
    overflow: hidden;
    margin: 10px 1%;
    min-width: 220px;
    max-width: 310px;
    width: 100%;
    background: #000000;
    text-align: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    transition: all .35s ease-in-out;
`

const FirstWrapper = styled.img`
    max-width: 100%;
    vertical-align: top;
    height: 210px;

    &:hover {
        opacity: 0.3;
        filter: grayscale(100%);
    }
`

const SecondWrapper = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    font-size: 34px;
    color: #000000;
    width: 60px;
    height: 60px;
    line-height: 60px;
    background: #ffffff;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 300ms 0ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: translate(-50%, -50%) scale(1);
        transition: transform 300ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
`



const Rise = () => (
    <img height="200px" width="200px" alt="pic" src={movet} />
)

const Movet = () => (
    <img height="200px" width="200px" alt="pic" src={rise} />
)

export default function TestPage() {
    return (
        <Layout>
            <Header>Projects</Header>
            <Container>
                <Rise />
                <Movet />
            </Container>
        </Layout>
    );
}