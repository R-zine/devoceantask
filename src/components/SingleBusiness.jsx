import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const SingleBusiness = ({ data }) => {
  const [business, setBusiness] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [nearby, setNearby] = useState([]);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setBusiness(data.filter((b) => b.id === params.businessId));
    if (isLoaded) {
      setNearby(
        data.filter(
          (b) =>
            b.address.street === business[0].address.street &&
            b.id !== business[0].id
        )
      );
    }
  }, [data, isLoaded]);

  useEffect(() => {
    setIsLoaded(Object.keys(business).length !== 0);
  }, [business]);

  let phoneArray = [];

  if (isLoaded) phoneArray = business[0].phone.split("-");

  if (isLoaded) {
    return (
      <section className="SingleBusiness">
        <img src={business[0].image} alt="company-image" />
        <div className="address--card">
          <h1>Address</h1>
          <p>{`${business[0].address.zip} ${business[0].address.street} Street`}</p>
          <p>{`${business[0].address.city}, ${business[0].address.country}`}</p>
        </div>
        <div className="contact--card">
          <h1>Contact</h1>
          <p>{`(${phoneArray[0]}) ${phoneArray[1]}-${phoneArray[2]}`}</p>
          <p>{`${business[0].email}`}</p>
        </div>
        <div className="nearby--paper">
          <h1>Nearby Places</h1>
          {nearby.length > 0 ? (
            nearby.map((p) => (
              <div
                className="nearby--content"
                key={nanoid()}
                onClick={() => {
                  navigate(`/${p.id}`);
                  setIsLoaded(false);
                }}
              >
                <div>{p.name}</div>
                <div>{`${p.address.number} ${p.address.street}, ${p.address.city} ${p.address.zip}`}</div>
              </div>
            ))
          ) : (
            <h3>Sorry, there are no nearby places to display.</h3>
          )}
        </div>
      </section>
    );
  } else {
    return <div className="loader">Loading...</div>;
  }
};

export default SingleBusiness;
