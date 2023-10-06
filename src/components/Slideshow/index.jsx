import React, { useState } from 'react';
import '../../styles/slideshow.css'
import Arrow from '../../assets/chevron-down.svg'

const Slideshow = ({ pictures }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + pictures.length) % pictures.length);
    };

    if (pictures.length <= 1) {
        return (
            <div className="slideshow">
                <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            </div>
        ); // Don't display anything if there's only one picture
    }

    return (
        <div className="slideshow">
            <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            <div onClick={prevSlide} className="arrow left-arrow"><img src={Arrow} alt="Arrow" /></div>
            <div onClick={nextSlide} className="arrow right-arrow"><img src={Arrow} alt="Arrow" /></div>
            <p className="counter">{`${currentSlide + 1}/${pictures.length}`}</p>
        </div>
    );
};

export default Slideshow;
