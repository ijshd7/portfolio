import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Hero from "../components/hero"
import Introduction from "../components/introduction"
import About from "../components/about"

import Testimonials from "../components/testimonials"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <Link className="text-3xl mx-2" to="blog" >Blog</Link>
    <Link className="text-3xl mx-2" to="resources" >Resources</Link>
    <Link className="text-3xl mx-2" to="resume" >Resume</Link>
    <Link className="text-3xl mx-2" to="tutorials" >Tutorials</Link>
    <Header />
    <Hero />
    <Introduction />
    <About />
    <Testimonials />
    <Footer />
  </>
)


export default IndexPage
