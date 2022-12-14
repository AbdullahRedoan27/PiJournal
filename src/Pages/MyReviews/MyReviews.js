import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useTitleHook from "../../Hooks/useTitleHook";
import MyReviewCard from "./MyReviewCard/MyReviewCard";
import { toast } from "react-toastify";

const MyReviews = () => {
  useTitleHook("My reviews");
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://pi-journal-server.vercel.app/myReviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("PiToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setMyReviews(data));
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      fetch(`https://pi-journal-server.vercel.app/myReviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("deleted");
            const restReviews = myReviews.filter((review) => review._id !== id);
            setMyReviews(restReviews);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      {myReviews.length === 0 ? (
        <p className="text-center">No Reviews To Show</p>
      ) : (
        <div>
          {myReviews.map((review) => (
            <MyReviewCard
              key={review._id}
              singlereview={review}
              handleDelete={() => handleDelete(review._id)}
            ></MyReviewCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
