import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
import { Component } from "react"
import next from '../../covers/right-iconSlide.png'
import prev from '../../covers/left-iconSlide.png'
import { GameItem } from "../game-item/game-item";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={next}
            className={className}
            style={{
                ...style,
                display: "block",
                position: 'absolute',
                top: '270px',
                left: '640px',
                cursor: 'pointer',
                width: '60px',
                height: '60px'

            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={prev}
            className={className}
            style={{
                ...style, display: "inline",
                position: 'absolute',
                top: '270px',
                left: '550px',
                width: '60px',
                height: '60px'
            }}
            onClick={onClick}
        />
    );
}

export default class GlobalSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div className="sliderS">
                <Slider {...settings}>
                   
                </Slider>
            </div>
        );
    }
}