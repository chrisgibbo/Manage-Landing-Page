import React from "react";
import "../App.css";

const infoSection = (props) => {
  return (
    <div className="flex items-start pl-20 pb-10 gap-8 font-BeVietnamPro">
      <button className="brightRed py-2 px-5 font-bold text-white text-xs rounded-full">
        {props.button}
      </button>
      <div>
        <h3 className="darkBlue font-bold text-sm pb-4">{props.title}</h3>
        <p className="greyFont text-sm">{props.paragraph}</p>
      </div>
    </div>
  );
};

export default infoSection;
