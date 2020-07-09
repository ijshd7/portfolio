import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import movet from "../images/movetscreenshot.png"
import rise from "../images/risescreenshot.png"

// need to add projects, build testimonial section
// use grid layout inspiration and possibly change theming to dark
// AND/OR add dark/light theme

//large grid for main page.. and centered stuff for homepage?

const Wrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(auto-fit, minmax(250px,500px));
    justify-content: space-evenly;
`

const ImgWrapper = styled.div`
    max-width: 650px;
    overflow: hidden;
    font-weight: 300;
`

const ImageOne = () => (
    <ImgWrapper>
        <img alt="pic" src={movet} />
    </ImgWrapper>
)

const ImageTwo = () => (
    <ImgWrapper>
        <img alt="pic" src={rise} />
    </ImgWrapper>
)

export default function TestPage() {
    return (
        <Layout>
            <Wrapper>
                <ImageOne />
                <ImageTwo />
                <ImageOne />
                <ImageTwo />
                <ImageOne />
                <ImageTwo />
                <ImageOne />
                <ImageTwo />
            </Wrapper>
        </Layout>
    );
}