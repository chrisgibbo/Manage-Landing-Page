import React from "react";
import "../App.css";

function testimonials(props) {
  return (
    <div className="flex flex-col items-center mx-2 mt-10 mb-6 greyBackground relative h-44 hover:cursor-move max-md:h-72">
      <div className="flex flex-col items-center h-24 ">
        <img
          src={props.image}
          alt="Persons Face"
          className="h-1/3 absolute top-[-28px] max-md:top-[-38px]"
        ></img>
      </div>
      <div className="pb-7 px-6 max-md:p-0">
        <h3 className="darkBlue text-sm font-bold pb-6 max-md:text-xl max-lg:text-bold">
          {props.name}
        </h3>
        <p className="greyFont text-xs max-md:text-lg max-lg:px-10 max-lg:pb-10">
          <q>{props.testimonial}</q>
        </p>
      </div>
    </div>
  );
}

export default testimonials;
