import React from "react";
import '../styles/card.css';

const Card = () => {
    return (
        <section className="card-list">
            <article className="card">
                <header className="card-header">
                    <p>Jan 14th 2021</p>
                    <h2>Hello World!</h2>
                </header>
                <div className="card-author">
                    <a className="author-avatar" href="#">
                        <img src="https://ijshd7.github.io/portfolio/static/southParkAvatar-4cc54f6b41ea48801294b6b663c50ab0.jpg" />
                    </a>
                    <svg className="half-circle" viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div className="author-name">
                        <div className="author-name-prefix">Author</div>
                    Isaiah Sherrill
                    </div>
                </div>
                
                <div className="tags">
                    <a href="#">html</a>
                    <a href="#">css</a>
                    <a href="#">web-dev</a>
                </div>
            </article>
        </section>
    );
}

export default Card;