import React, { useState } from "react";
import "./styles.css";

import Zane from "../../assets/Zane.png";
import Star from "../Star";

const IdCard = () => {
  const [contact, setContact] = useState({
    firstName: "Zana",
    lastName: "Garaplija",
    phone: "062/081-531",
    email: "zanagaraplija@gmail.com",
    isFavorite: true,
  });

  const toggleFavorite = () => {
    setContact((prevState) => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite,
      };
    });
  };

  return (
    <article className="card">
      <img className="contact-photo" src={Zane} alt="Zana" />
      <div className="card--info">
        <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
        <h2>
          {contact.firstName} {contact.lastName}
        </h2>
        <p> {contact.phone} </p>
        <p>{contact.email}</p>
      </div>
    </article>
  );
};

export default IdCard;
