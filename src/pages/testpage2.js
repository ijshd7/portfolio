import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import movet from "../images/movetscreenshot.png"
import movetlogo from "../images/movetlogo.png"
import movetiphone1 from "../images/movetiphone.png"
import movetiphone2 from "../images/movetiphone2.png"
import riselogo from "../images/riselogo.png"
import rise1 from "../images/risescreenshot.png"
import rise2 from "../images/risescreenshot1.png"
import rise3 from "../images/risescreenshot2.png"
import rise4 from "../images/risescreenshot3.png"

// carousel for rise.. think it might require a library
// hover effect for movet
// other projects link

const Wrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    justify-content: space-evenly;
`

const ImgWrapper = styled.div`
    max-width: 650px;
    overflow: hidden;
    font-weight: 300;
`

const Image = ({source}) => (
    <ImgWrapper>
        <img alt="pic" width="250px" src={source} />
    </ImgWrapper>
)

export default function TestPage() {
    return (
        <Layout>
            <Wrapper>
                <Image source={movetlogo} />
                <Image source={riselogo} />
            </Wrapper>
        </Layout>
    );
}