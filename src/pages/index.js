import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Introduction from "../components/introduction"
import About from "../components/about"
import Projects from "../components/projects"
import Testimonials from "../components/testimonials"

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <About />
      <Projects />
      <Testimonials />
    </Layout>
  );
}
