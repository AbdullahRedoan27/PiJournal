import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewCard from './MyReviewCard/MyReviewCard';

const MyReviews = () => {
    const {user, logOut} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myReviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('PiToken')}`
            }
        })
        .then(res=>{
            if (res.status === 401 || res.status === 403) {
                return logOut()
            }
           return res.json()
        })
        .then(data => setMyReviews(data))
    },[user?.email, logOut])

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/myReviews/${id}`,{
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                alert('deleted')
                const restReviews = myReviews.filter((review) => review._id !== id);
                setMyReviews(restReviews);
            }
        })
        .catch(error => console.error(error))
        }
    }

    return (
        <div>
            {myReviews.map(review => <MyReviewCard
                key={review._id}
                singlereview = {review}
                handleDelete={() => handleDelete(review._id)}
            ></MyReviewCard>)}
        </div>
    );
};

export default MyReviews;