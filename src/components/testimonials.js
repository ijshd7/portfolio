import React from "react"
import styled from "styled-components"

const TestimonialWrapper = styled.section`
    background-color: black;
    background-size: contain;
    display: inline-block;
    position: relative;
    height: auto;
    width: 100%;
`

const Testimonials = () => (
    <TestimonialWrapper>
        <div className="p-16 text-center text-white font-mono antialiased">
            <h1 style={{fontSize: "8vh"}} className="mb-8 ">TESTIMONIALS</h1>
            <p style={{fontSize: "6vh"}} className="mt-auto">Coming Soon...</p>
        </div>
    </TestimonialWrapper>
)


export default Testimonials