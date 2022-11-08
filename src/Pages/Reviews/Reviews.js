import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import SingleReviewCard from "./SingleReviewCard";

const Reviews = (props) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const { _id, name } = props.service;

  const location = useLocation();
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;

    const review = {
      name: user?.displayName,
      email: user?.email,
      img: user?.img,
      serviceName: name,
      serviceId: _id,
      review: message,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.acknowledged === true) {
          alert("review added");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="">
      <div>
        <div className="mx-auto">
          {reviews.map((review) => (
            <SingleReviewCard
              key={review._id}
              review={review}
            ></SingleReviewCard>
          ))}
        </div>
        <div className="w-11/12 mx-auto">
          <form onSubmit={handleAddReview}>
            <div className="form-control w-full border p-5 rounded-xl border-gray-500">
              <label className="label">
                <span className="label-text">Add a review</span>
              </label>
              {user?.uid ? (
                <textarea
                  type="text"
                  placeholder="Write your opinion"
                  className="textarea textarea-bordered w-full max-w-xs"
                  disabled={false}
                  name="message"
                />
              ) : (
                <>
                  <p className="mb-2">
                    <Link
                      to="/login"
                      state={{ from: location }}
                      className="underline"
                    >
                      Login
                    </Link>{" "}
                    to add a review
                  </p>
                  <textarea
                    type="text"
                    placeholder="Write your opinion"
                    className="textarea textarea-bordered w-full max-w-xs"
                    disabled={true}
                  />
                </>
              )}
              <button className="btn btn-sm mt-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
