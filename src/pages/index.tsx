import React from "react";
import Hero from '../components/hero';
import Introduction from '../components/introduction';
import About from '../components/about';
import Projects from '../components/projects';
import ContactForm from '../components/contactForm';

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Introduction />
      <About />
      <Projects />
      <ContactForm />
    </>
  );
}
