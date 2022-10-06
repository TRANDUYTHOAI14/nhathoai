import React from "react";

function Card(props) {
  const { img, name, job } = props;

  return (
    <div className="cardBox">
      <div className="cardImg">
        <img src={img} alt="" />
      </div>
      <div className="cardname">{name}</div>
      <div className="cardjob">{job}</div>
    </div>
  );
}

export default Card;
