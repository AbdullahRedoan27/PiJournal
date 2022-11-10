import React, { useEffect, useState } from "react";
import useTitleHook from "../../Hooks/useTitleHook";
import ServiceCard from "./ServiceCard";

const Services = () => {
  useTitleHook("Services");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5000/services")
      .then((result) => result.json())
      .then((data) => setServices(data));
      setLoading(false)
  }, []);
  return (
    <div>
      <div>
        {loading ? (
          <button className="btn loading flex justify-center text-center"></button>
        ) : (
          <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 mx-auto">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
