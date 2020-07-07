import React, {Component} from "react"
import {Carousel} from "react-bootstrap";

class Slayder extends Component {
    render (){
        return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/holder/Sekcja1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/holder/Sekcja2.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/holder/Sekcja3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        )
    }
}

 export default Slayder;
