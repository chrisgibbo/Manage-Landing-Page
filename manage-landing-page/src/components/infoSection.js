import React from "react";

const infoSection = (props) => {
  return (
    <div>
      <button>{props.button}</button>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default infoSection;
