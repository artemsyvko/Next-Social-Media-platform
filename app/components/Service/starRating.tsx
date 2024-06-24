"use client"
import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface StarRatingProps {
    totalStars?: number;
}

const StarRating: FC<StarRatingProps> = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="flex items-center text-sm text-[#d3d3d3]">
            {[...Array(totalStars)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            className="hidden"
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            className={`star px-1 ${ratingValue <= (hover || rating) ? 'filled' : ''}`}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(ratingValue)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;