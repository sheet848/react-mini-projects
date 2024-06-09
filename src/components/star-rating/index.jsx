import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

const StarRate = ({noOfStars = 5}) => {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <>
    <div className="start-rating">
    {
        [...Array(noOfStars)].map((_, index) => {
            index += 1;

            return <FaStar
            key={index}
            className={index <= (hover || rating)? 'active' : 'inactive'}
            onClick={() => handleClick(i)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
            />
        })
    }
    </div>
    </>
  );
}

export default StarRate
