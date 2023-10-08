import React from "react";
import "../App.css";

function testimonials(props) {
  return (
    <div className="flex flex-col justify-center items-center greyBackground">
      <div>
        <img src={props.image} alt="Persons Face"></img>
      </div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.testimonial}</p>
      </div>
    </div>
  );
}

export default testimonials;
