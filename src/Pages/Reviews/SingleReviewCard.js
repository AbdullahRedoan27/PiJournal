import React from 'react';
import {FaUser} from 'react-icons/fa';

const SingleReviewCard = (props) => {
    const {name, email, img, review} = props.review;
    return (
        <div className='ml-3 mb-3 border border-slate-600 rounded-xl p-6'>
            <div className='leading-none flex items-center'>
            {img?
            <img className='border border-gray-600 rounded-full w-8' src={img} alt="avatar" ></img>
            :
            <FaUser className='border border-gray-500 rounded-full mr-2'></FaUser>
            }
            <p> {name}</p>
            </div>
            <small className='leading-none ml-4'>{email}</small>
            <p className='ml-4'>{`"${review}"`}</p>
        </div>
    );
};

export default SingleReviewCard;