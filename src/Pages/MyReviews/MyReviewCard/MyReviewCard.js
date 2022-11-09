import React from "react";
import { FaUser } from "react-icons/fa";
import { RiDeleteBinFill, RiEditFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const MyReviewCard = ({singlereview, handleDelete}) => {
  const { name, email, img, review, serviceName, _id, dateTime } = singlereview;
  const {date, hh, mm} = dateTime;
  const dateSliced = date.slice(0, 10);

  return (
    <div className="ml-3 mb-3 border border-slate-600 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="leading-none flex items-center">
          {img ? (
            <img
              className="border border-gray-600 rounded-full w-8"
              src={img}
              alt="avatar"
            ></img>
          ) : (
            <FaUser className="border border-gray-500 rounded-full mr-2"></FaUser>
          )}
          <p> {name}</p>
        </div>
        <div className="flex items-center gap-5">
            <Link to={`/editReview/${_id}`} className="border border-slate-500 rounded p-1 hover:bg-slate-800"><RiEditFill></RiEditFill></Link>
            <button onClick={handleDelete} className="border border-slate-500 rounded p-1 hover:bg-slate-800"><RiDeleteBinFill></RiDeleteBinFill></button>
        </div>
      </div>
      <small className="leading-none ml-4">{email}</small>
      <div className="flex justify-between">
      <p className="ml-4">{`Reviewed on: "${serviceName}" service`}</p>
      <p>{`${dateSliced}, ${hh}:${mm}`}</p>
      </div>
      <p className="ml-4">{`"${review}"`}</p>
    </div>
  );
};

export default MyReviewCard;
