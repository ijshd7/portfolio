import React from "react"
import styled from "styled-components"

const TestimonialWrapper = styled.section`
    max-height: 919.95px;
    max-width: 1435px;
    padding: 3rem 1.5rem;
    display: block;
    background-color: black;
`

const Header = styled.h1`
    color: white;
    font-size: 2.5rem;
    text-align: center;
`

const Testimonials = () => (
    <TestimonialWrapper>
        <Header>TESTIMONIALS</Header>
        <p className="text-3xl text-center text-white mt-10 font-mono antialiased">Coming Soon...</p>
    </TestimonialWrapper>
)

export default Testimonials