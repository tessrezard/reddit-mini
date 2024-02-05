import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/CSS/main.css';


// for custom arrows, with in built styles and amendable classes 
const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    const handleArrowClick = (e) => {
        e.stopPropagation();
        onClick && onClick(e);
    };
    return (
        <div
            className={`${className} arrow-next`}
            style={{
                 ...style, 
                 display: "flex", 
                 right: 50,
                }}
            onClick={handleArrowClick}
        />
    );
}

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    const handleArrowClick = (e) => {
        e.stopPropagation();
        onClick && onClick(e);
    };
    return (
        <div
            className={`${className} arrow-prev`}
            style={{
                ...style, 
                display: "flex",
                left: 50,
                zIndex: 3, 
                //  background: 'red',
               }}
            onClick={handleArrowClick}
        />
    );
}


const customDots = dots => (
    <div 
    style={{
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
    }}
    >
        <div
            style={{
                backgroundColor: "rgb(234, 237, 239)",
                borderRadius: "19px",
                width: 'min-content',
                display: 'flex',
                justifyContent: 'center',
                margin: '2rem',
                marginBottom: '4rem',
            }}
        >
            <ul
                style={{
                    margin: 1,
                    display: 'flex',
                }}> {dots} </ul>
        </div>
    </div>

)


function Carousel({ mediaArr, post }) {
    console.log(mediaArr);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        zIndex: 1,
        appendDots: customDots,
    };


    return (
        <Slider {...settings}>

            {mediaArr.map((img) => (
                <div key={img}>
                    <img src={img} alt={post.title} className='carousel-img' />
                </div>
            ))}
        </Slider>
    );
}

export default Carousel;

