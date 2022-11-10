import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const service = props.service;
  const { name, description, img, price, priceUnit, _id } = service;
  return (
    <div>
      <div className="card md:w-80 lg:w-80 mb-5 mx-auto bg-base-200 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={img} alt="not found" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{name}</h2>
          <p>{`${description.slice(0, 100)}....`}</p>
          <p className="text-lg">
            price:<span className="font-bold">{price}$</span>
            {priceUnit}
          </p>
          <div className="card-actions">
            <Link to={`/services/${_id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
