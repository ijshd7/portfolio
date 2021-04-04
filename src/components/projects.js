import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Dialog } from '@reach/dialog';
import "@reach/dialog/styles.css";
import floating1 from '../images/floatingstl1.png';
import floatingLogo from '../images/float-logo-teal.png';
import dogwood1 from '../images/dogwood1.png';
import dogwoodLogo from '../images/dogwood-advisors-vertical-logo.png';
import rise1 from '../images/riseCarousel3.png';
import riseLogo from '../images/rise-logo-white.png';
import coach1 from '../images/mycoachkevin1.png';
import coachLogo from '../images/logo.png';
import movet1 from '../images/movetiphone.png';
import movetLogo from '../images/movetLogoWithIcon.png'

const ProjectsWrapper = styled.section`
    background-color: #111827;
    background-size: contain;
    display: inline-block;
    position: relative;
    height: auto;
    width: 100%;
`;

const ProjectModal = ({ contributions, technologies }) => {
    const [showProject, setShowProject] = useState(false);
    const open = () => setShowProject(true);
    const close = () => setShowProject(false);

    return (
        <div>
            <button className="text-white focus:outline-none cursor-pointer no-underline hover:text-green-400 transition-all duration-300 ease-linear" onClick={open}>Learn more</button>
            <Dialog className="flex flex-col text-center" isOpen={showProject} onDismiss={close}>
                <p className="text-black"><span className="underline text-green-400">Contributions:</span> {contributions}</p>
                <p className="text-black"><span className="underline text-green-400">Technologies:</span> {technologies}</p>
                <button className="text-gray-900 hover:text-red-300 focus:outline-none cursor-pointer underline" onClick={close}>close</button>
            </Dialog>
        </div>
    );
}

const Projects = () => (
    <ProjectsWrapper>
        <div className="mt-6 text-center text-white font-mono antialiased">
            <h1 className="mx-auto text-3xl">PROFESSIONAL PROJECTS</h1>
            <Link to="/" className="underline text-white hover:text-green-400 transition-all duration-300 ease-linear">back</Link>
            <div className="flex-col lg:flex lg:flex-row mt-4 mb-4">
                <div className="w-2/3 mb-6 lg:w-1/4 mx-auto">
                    <div className="relative">
                        <img className="rounded-lg mb-2" src={floating1} alt="Floating STL screenshot"/>
                        <ProjectModal
                            contributions="Theme customization, plugin integration, gravity forms, advanced custom fields"
                            technologies="WordPress, HTML, CSS, JavaScript, PHP"
                        />
                    </div>
                    <a className="" href="https://www.floatingstl.com/" target="_blank" aria-label="Floating STL" rel="noreferrer">
                        <img className="mt-4 w-1/2 mx-auto" src={floatingLogo} alt="Floating STL logo"/>
                    </a>
                </div>
                <div className="w-2/3 mb-6 lg:w-1/4 mx-auto">
                    <div className="relative">
                        <img className="rounded-lg mb-2" src={dogwood1} alt="Dogwood Compliance screenshot"/>
                        <ProjectModal
                            contributions="Rebuilding site to utilize newer technologies"
                            technologies="React, GatsbyJS, Styled Components, TailwindCSS, Node, GraphQL, Firebase, Sanity.io"
                        />
                    </div>
                    <a href="https://dogwoodcompliance.com/" target="_blank" aria-label="Dogwood Compliance" rel="noreferrer">
                        <img className="mt-2 mx-auto" src={dogwoodLogo} alt="Dogwood Compliance logo"/>
                    </a>
                </div>
                <div className="w-2/3 lg:w-1/4 mx-auto">
                    <div className="relative">
                        <img className="rounded-lg mb-2" src={rise1} alt="Rise Float Gathering screenshot"/>
                        <ProjectModal
                            contributions="Rebuilding site to utilize newer technologies"
                            technologies="React, GatsbyJS, Styled Components, TailwindCSS"
                        />
                    </div>
                    <a href="https://risefloatgathering.com/" target="_blank" aria-label="Rise Float Gathering" rel="noreferrer">
                        <img className="mt-2 w-1/2 mx-auto" src={riseLogo} alt="Rise Float Gathering logo"/>
                    </a>
                </div>
            </div>
            <div className="flex-col lg:flex lg:flex-row mt-6">
                <div className="w-2/3 lg:w-1/3 mx-auto mb-6">
                    <div className="relative">
                        <img className="rounded-lg mb-2" src={coach1} alt="Elevated Coaching screenshot"/>
                        <ProjectModal
                            contributions="Integrated new features, functionality, and provided client support & education"
                            technologies="React, GatsbyJS, Styled Components, TailwindCSS, TypeScript, Firebase, Gitlab CI"
                        />
                    </div>
                    <a href="https://mycoachkevin.com/" target="_blank" aria-label="Elevated Coaching" rel="noreferrer">
                        <img className="mt-2 w-1/2 mx-auto" src={coachLogo} alt="Elevated Coaching logo"/>
                    </a>
                </div>
                <div className="w-2/3 lg:w-1/3 mx-auto mb-6">
                    <div className="relative">
                        <img className="sm:h-1/3 lg:h-2/3 mx-auto rounded-lg mb-2" src={movet1} alt="Movet screenshot"/>
                        <ProjectModal
                            contributions="Rebuilding site to utilize newer technologies"
                            technologies="React, GatsbyJS, Styled Components, TailwindCSS"
                        />
                    </div>
                    <a href="https://movetcare.com/" target="_blank" aria-label="Movet On Demand Pet Services" rel="noreferrer">
                        <img className="mt-2 mx-auto" src={movetLogo} alt="Movet logo"/>
                    </a>
                </div>
            </div>
        </div>
    </ProjectsWrapper>
)

export default Projects