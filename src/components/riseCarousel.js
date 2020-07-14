import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import rise1 from "../images/risescreenshot.png"
import rise2 from "../images/risescreenshot1.png"
import rise3 from "../images/risescreenshot2.png"
import rise4 from "../images/risescreenshot3.png"

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
                    <img src={rise1} />
                </div>
                <div>
                    <img src={rise2} />
                </div>
                <div>
                    <img src={rise3} />
                </div>
                <div>
                    <img src={rise4} />
                </div>
            </Carousel>
        )
    }
}