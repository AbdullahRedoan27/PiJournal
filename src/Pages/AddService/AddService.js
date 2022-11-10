import React from "react";
import useTitleHook from "../../Hooks/useTitleHook";
import { toast } from "react-toastify";

const AddService = () => {
  useTitleHook("Add a service");
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const description = form.description.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const priceUnit = form.priceUnit.value;

    const service = {
      name: serviceName,
      price: price,
      img: photo,
      description: description,
      priceUnit: priceUnit,
    };

    fetch("https://pi-journal-server.vercel.app/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          toast.success("service added");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleAddService} className="flex-col gap-3">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What's your service's name?</span>
          </label>
          <input
            type="text"
            placeholder="Service Name"
            className="input input-bordered w-full max-w-xs"
            name="serviceName"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Write some description about your service.
            </span>
          </label>
          <textarea
            type="text"
            placeholder="Description"
            className="textarea textarea-bordered w-full max-w-xs"
            name="description"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Price of your service? (Don't put "$" sign)
            </span>
          </label>
          <input
            type="text"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            name="price"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Price unit (such as: $/page) of your service?
            </span>
          </label>
          <input
            type="text"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
            name="priceUnit"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Please provide a valid image link for your service (315*200 px
              recommanded).
            </span>
          </label>
          <input
            type="text"
            placeholder="PhotoURL"
            className="input input-bordered w-full max-w-xs"
            name="photo"
          />
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default AddService;
