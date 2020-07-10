import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import movet from "../images/movetscreenshot.png"
import rise from "../images/risescreenshot.png"

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