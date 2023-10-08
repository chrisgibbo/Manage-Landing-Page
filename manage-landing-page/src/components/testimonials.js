import React from "react";
import "../App.css";

function testimonials(props) {
  return (
    <div className="flex flex-col items-center mx-3 mb-8 greyBackground">
      <div className="flex flex-col items-center">
        <img src={props.image} alt="Persons Face" className="w-1/2 "></img>
      </div>
      <div>
        <h3 className="">{props.name}</h3>
        <p className="">{props.testimonial}</p>
      </div>
    </div>
  );
}

export default testimonials;
