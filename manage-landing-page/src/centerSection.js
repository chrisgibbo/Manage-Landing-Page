import React from "react";
import InfoSection from "./components/infoSection";

function centerSection() {
  return (
    <div className="px-28 py-12 h-screen box-border font-BeVietnamPro">
      <div>
        <h1>What's different about Manage?</h1>
        <p>
          Mange provides all the functionality your team needs. Without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div>
        <InfoSection
          button="01"
          title="Track company-wide progress"
          paragraph="See how your day-to-day tasks fit into the wider vision. Go from
        tracking progress at the milestone level all the way done to the
        smallest of detail. Never lose sight of the bigger picture again."
        />
        <InfoSection
          button="02"
          title="Track company-wide progress"
          paragraph="See how your day-to-day tasks fit into the wider vision. Go from
        tracking progress at the milestone level all the way done to the
        smallest of detail. Never lose sight of the bigger picture again."
        />
        <InfoSection
          button="03"
          title="Track company-wide progress"
          paragraph="See how your day-to-day tasks fit into the wider vision. Go from
        tracking progress at the milestone level all the way done to the
        smallest of detail. Never lose sight of the bigger picture again."
        />
      </div>
    </div>
  );
}

export default centerSection;
