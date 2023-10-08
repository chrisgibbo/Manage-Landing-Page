import React from "react";
import "../App.css";

function testimonials(props) {
  return (
    <div className="flex flex-col items-center mx-2 mt-10 greyBackground relative h-44">
      <div className="flex flex-col items-center h-24 bg-red-200">
        <img
          src={props.image}
          alt="Persons Face"
          className="h-1/3 absolute top-[-28px]"
        ></img>
      </div>
      <div className="pb-10 px-6">
        <h3 className="darkBlue text-sm font-bold pb-6">{props.name}</h3>
        <p className="greyFont text-xs">{props.testimonial}</p>
      </div>
    </div>
  );
}

export default testimonials;
