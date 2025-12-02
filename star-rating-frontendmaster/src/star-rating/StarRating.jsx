import React, { useState, useEffect } from 'react';
import './StarRating.css';
import Star from './Star';

const NUMBER_OF_STARS = 5;

const StarRating = ({ value = 0, onChange, numberOfStars = NUMBER_OF_STARS }) => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [clickedIndex, setClickedIndex] = useState(value - 1)

    const handleClick = (index) => {
            setClickedIndex(index + 1);
            onChange(index + 1)
    }

    function handleMouseEnter(index) {
        return () => {
            setHoveredIndex(index+1);
        }
    }

    function handleMouseLeave() {
        setHoveredIndex(-1);
    }

    return (
        <>
            <h1>Star Component</h1>
            <div className='star-rating'>
                <h2>Rating</h2>
                {Array.from({length: numberOfStars}).map((_, index) => {
                    let className = '';

                    if(index < clickedIndex) {
                        className = 'active';
                    }

                    if(index < hoveredIndex) {
                        className += ' hovered'
                    }

                    return (
                        <button 
                            className={className} 
                            onClick={() => handleClick(index)}
                            onMouseEnter={handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Star />
                        </button>
                    )      
                })}</div>
           
        </>
    )
}

export default StarRating;