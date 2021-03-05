import React from "react";
import { Helmet } from 'react-helmet';
import Hero from '../components/hero';
import Introduction from '../components/introduction';
import About from '../components/about';
import Projects from '../components/projects';
import ContactForm from '../components/contactForm';

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Isaiah Sherrill's website</title>
        <link rel="canonical" href="http://isiahsherrill.com" />
      </Helmet>
      <Hero />
      <Introduction />
      <About />
      <Projects />
      <ContactForm />
    </>
  );
}
