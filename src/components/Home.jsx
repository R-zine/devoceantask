import React from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <section className="Home">
      <div className="home--header">
        <div>Name</div>
        <div>Description</div>
      </div>
      {data.map((business) => (
        <Link to={`/${business.id}`}>
          <div className="home--content" key={nanoid()}>
            <div>{business.name}</div>
            <div>{business.description}</div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Home;
