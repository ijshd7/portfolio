import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import rise1 from "../images/risecarousel1.png"
import rise2 from "../images/risecarousel2.png"
import rise3 from "../images/risecarousel3.png"
import rise4 from "../images/risecarousel4.png"

export default class RiseCarousel extends React.Component {
    render() {
        return (
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                showStatus={false}
                showIndicators={false}
            >
                <div>
                    <img width="100%" height="100%" src={rise1} />
                </div>
                <div>
                    <img width="100%" height="100%" src={rise2} />
                </div>
                <div>
                    <img width="100%" height="100%" src={rise3} />
                </div>
                <div>
                    <img width="100%" height="100%" src={rise4} />
                </div>
            </Carousel>
        )
    }
}