import React from "react";
import hills from '../imgs/hills.svg'

const ReviewCard = function ({ review }) {
    return (
        <div className="review">
            <div className="review__img-container">
                <div className="review__img"><img src={hills} alt="" /></div>
            </div>
            <div className="review__info">
                <div className="review__main">
                    <div className="review__name">{review.name}</div>
                    <div className="review__rating">Оценка: <span>{review.rating}</span></div>
                </div>
                <div className="review__text">{review.text}</div>
            </div>
        </div>
    );
}

export default ReviewCard;