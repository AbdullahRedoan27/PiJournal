import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";
import useTitleHook from "../../Hooks/useTitleHook";
import {toast} from 'react-toastify';

const EditReview = () => {
    useTitleHook("Edit review")
  const reviewData = useLoaderData();
  const { name, email, img, review, serviceName, _id } = reviewData;

  const handelReviewEdit = (event) => {
    event.preventDefault();
    const form = event.target
    const updatedReview = form.updatedReview.value;
    
    fetch(`https://pi-journal-server.vercel.app/editReview/${_id}`,{
        method:"PATCH",
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify({updatedReview})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
            toast.success('Review edited successfully')
        }
    })
  };

  return (
    <div>
      <div className="ml-3 mb-3 border border-slate-600 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="leading-none flex items-center">
            {img ? (
              <img
                className="border border-gray-600 rounded-full w-8"
                src={img}
                alt=""
              ></img>
            ) : (
              <FaUser className="border border-gray-500 rounded-full mr-2"></FaUser>
            )}
            <p> {name}</p>
          </div>
        </div>
        <small className="leading-none ml-4">{email}</small>
        <p className="ml-4">{`Reviewed on: "${serviceName}" service`}</p>
        <div>
          <form onSubmit={handelReviewEdit} className="flex items-center flex-row-reverse gap-5">
            <button className="border border-slate-500 rounded p-1 hover:bg-slate-800">
              <MdOutlineDownloadDone></MdOutlineDownloadDone>
            </button>
            <textarea
              className="textarea textarea-bordered w-full mx-auto"
              placeholder={review}
              name='updatedReview'
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditReview;
