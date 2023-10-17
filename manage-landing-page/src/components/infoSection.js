import React from "react";
import "../App.css";

const infoSection = (props) => {
  return (
    <div className="flex items-start pl-20 pb-10 gap-8 font-BeVietnamPro max-lg:pl-0 max-lg:gap-2">
      <span
        className="brightRed py-2 px-5 font-bold text-white text-xs rounded-full
      max-lg:py-3 max-lg:px-8 max-lg:text-lg transition-transform transform hover:scale-105"
      >
        {props.button}
      </span>
      <div>
        <h3
          className="darkBlue font-bold text-sm pb-4 
        max-lg:text-lg max-lg:bg-red-100 max-lg:p-3 max-lg:pl-2 max-lg:mb-4 max-lg:rounded-xl"
        >
          {props.title}
        </h3>
        <p className="greyFont text-sm max-lg:text-base max-lg:pr-4">
          {props.paragraph}
        </p>
      </div>
    </div>
  );
};

export default infoSection;
