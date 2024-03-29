import React from "react";

const Card = props => {
  const { name, email } = props;
  return (
    <div
      className="tc bg-light-green dib pa3 ma2 grow bw2 shadow-5 "
      style={{ cursor: "pointer" }}
    >
      <img src={`https://robohash.org/${props.id}?50x50`} alt="robots" />
      <div>
        <h2> {name} </h2> <p> {email} </p>
      </div>
    </div>
  );
};

export default Card;
