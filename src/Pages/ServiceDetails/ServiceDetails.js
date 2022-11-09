import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { VscDebugBreakpointData } from "react-icons/vsc";
import Reviews from "../Reviews/Reviews";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useTitleHook from "../../Hooks/useTitleHook";

const ServiceDetails = () => {
  useTitleHook("Service Details");
  const data = useLoaderData();
  const { img, name, price, priceUnit, ratings, points, description } = data;
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3">
        <div className="col-span-2">
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="rounded-xl" src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
          <div className="flex justify-between mx-auto w-4/5">
            <h2 className="text-4xl font-bold mb-3">{name}</h2>
            <p>
              {ratings === 5 ? (
                <span className="flex mt-3 items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  {ratings}
                </span>
              ) : (
                <span className="flex mt-3 items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  {ratings}
                </span>
              )}
            </p>
          </div>
          <p className="mb-3">{description}</p>
          <h4 className="font-semibold">Advantages:</h4>
          <ul>
            {points.map((point) => (
              <li key={point} className="ml-3 flex items-center">
                <VscDebugBreakpointData />
                {point}
              </li>
            ))}
          </ul>
          <h3 className="text-2xl mt-3 font-semibold">
            Price: <span>{price}$</span>
            {priceUnit}
          </h3>
          <Link className="btn btn-outline btn-ghost mt-3 mx-auto text-center">
            CheckOut
          </Link>
        </div>
        <div>
          <Reviews service={data}></Reviews>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
