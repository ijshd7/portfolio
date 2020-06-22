import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
    max-height: 919.95px;
    max-width: 1435px;
    padding: 3rem 1.5rem;
    display: block;
    background-color: black;
`

const Header = styled.h1`
    color: white;
    font-size: 4.5rem;
    text-align: center;
`

const ComingSoon = () => (
    <Wrapper>
        <Header>??????????</Header>
        <p className="text-3xl text-center text-white mt-10 font-mono antialiased">Coming Soon...</p>
    </Wrapper>
)

export default ComingSoon