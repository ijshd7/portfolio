import React from "react"
import styled from "styled-components"

const IntroWrapper = styled.div`
    background: linear-gradient(45deg, #11A49B, #90FC8E);
    height: 100%;
    width: 100%;
`

const Text = () => (
    <div className="text-center text-white p-16">
        <h1 className="text-6xl mb-10">Nice to meet you.</h1>
        <p className="text-lg inline-block m-auto pt-4 px-64">
            A few years ago I started delving into the world of web development and never looked back. I've learned so much and met so many awesome people, and I look forward to working with you. If you already know me, what do you think of my site? And if you don't know me, here is what I do
        </p>
    </div>
)


const Introduction = () => (
    <IntroWrapper>
        <Text />
    </IntroWrapper>
)

export default Introduction