import React from "react";
import "./App.css";
import InfoSection from "./components/infoSection";

function centerSection() {
  return (
    <div className="flex justify-between px-28 pt-24 h-screen box-border font-BeVietnamPro">
      <div className="">
        <h1 className="text-4xl font-bold darkBlue mb-8">
          What's different about Manage?
        </h1>
        <p className="text-sm pr-28 greyFont">
          Mange provides all the functionality your team needs. Without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="">
        <InfoSection
          button="01"
          title="Track company-wide progress"
          paragraph="See how your day-to-day tasks fit into the wider vision. Go from
        tracking progress at the milestone level all the way done to the
        smallest of detail. Never lose sight of the bigger picture again."
        />
        <InfoSection
          button="02"
          title="Advanced built-in reports"
          paragraph="Set internal delivery estimates and track progress toward
          company goals. Our customisable dashboard helps you
          build out the reports you need to keep key stakeholders
          informed."
        />
        <InfoSection
          button="03"
          title="Everything you need in one place"
          paragraph="Stop jumping from one service to another to 
          communicate. Store files, track tasks and share
          documents. Manage offers an all-in-one team 
          productivity solution."
        />
      </div>
    </div>
  );
}

export default centerSection;
