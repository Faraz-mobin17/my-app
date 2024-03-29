import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, index) => {
    return (
      <Card
        id={robots[index].id}
        name={robots[index].name}
        email={robots[index].email}
        key={index}
      />
    );
  });
  return <div> {cardComponent} </div>;
};

export default CardList;
