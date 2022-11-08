import React from 'react';

const SingleReviewCard = (props) => {
    const {name, email, img} = props.review;
    return (
        <div>
            <img className='border border-gray-600 rounded-circle' src={img} alt="avatar" ></img>
            <p>{name}<br /><span className='ml-4'>{email}</span></p>

        </div>
    );
};

export default SingleReviewCard;