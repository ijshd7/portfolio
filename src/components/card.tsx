import React from "react";

const cardBackground = {
    backgroundColor: '#17141d',
    boxShadow: '-1rem 0 3rem #000'
};

const cardParaColor = {
    color: '#7a7a8c'
};

const Card = (props) => {
    return (
        <section className="flex p-12 overflow-x-scroll">
            <article className="flex relative flex-col h-350 w-400 min-w-250 p-6 rounded-2xl transition-all duration-200 ease-linear hover:transform hover:-translate-y-4" style={cardBackground}>
                <header class="mb-auto">
                    <p className="text-sm mt-0 mx-0 mb-4" style={cardParaColor}>{props.date}</p>
                    <h2 className="text-xl mt-1 mx-0 mb-auto cursor-pointer">{props.title}</h2>
                </header>
                <div class="card-author">
                    <a class="author-avatar" href="#">
                        <img src="https://ijshd7.github.io/portfolio/static/southParkAvatar-4cc54f6b41ea48801294b6b663c50ab0.jpg" />
                    </a>
                    <svg class="half-circle" viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div class="author-name">
                        <div class="author-name-prefix">
                            Author
                        </div>
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
    );
}

export default Card;