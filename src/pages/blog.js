import React from "react"
import { Link } from "gatsby"
import ComingSoon from "../components/comingSoon"

const Blog = () => (
    <>
        <Link className="text-3xl mx-2" to="/" >Home</Link>
        <Link className="text-3xl mx-2" to="/resources" >Resources</Link>
        <Link className="text-3xl mx-2" to="/resume" >Resume</Link>
        <Link className="text-3xl mx-2" to="/tutorials" >Tutorials</Link>
        <ComingSoon />
    </>
)

export default Blog