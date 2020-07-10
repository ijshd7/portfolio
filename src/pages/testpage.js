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

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const ImgWrapper = styled.div`

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
            <Container>
            </Container>
        </Layout>
    );
}