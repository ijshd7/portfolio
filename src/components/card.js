import React from "react";

const blackBackground = {
    backgroundColor: '#17141d'
  };

const Card = () => {
    return (
        <div className="p-0 m-0 text-white font-mono" style={blackBackground}>
            <section className="flex p-12 overflow-x-scroll">
                <article class="card">
                    <header class="card-header">
                        <p>Jan 14th 2021</p>
                        <h2>Hello World!</h2>
                    </header>
                    <div class="card-author">
                        <a class="author-avatar" href="#">
                            <img src="https://ijshd7.github.io/portfolio/static/southParkAvatar-4cc54f6b41ea48801294b6b663c50ab0.jpg" />
                        </a>
                        <svg class="half-circle" viewBox="0 0 106 57">
                            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                        </svg>
                        <div class="author-name">
                            <div class="author-name-prefix">Author</div>
                            Isaiah Sherrill
                        </div>
                    </div>
                    <div class="tags">
                        <a href="#">html</a>
                        <a href="#">css</a>
                        <a href="#">web-dev</a>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default Card;