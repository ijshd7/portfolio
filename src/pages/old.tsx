import React from "react";
import Hero from '../components/hero';
import Introduction from '../components/introduction';
import About from '../components/about';
import Projects from '../components/projects';
import SEO from '../components/seo';
import Layout from '../components/layout';

const OldIndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Introduction />
      <About />
      <Projects />
    </Layout>
  );
}
export default OldIndexPage;
