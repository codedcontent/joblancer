import React from "react";
import IntroContent from "./IntroContent";
import SuggestedJobsCard from "./SuggestedJobsCard";

const BuyerDashboardPage = () => {
  return (
    <div className="px-32 m-auto pt-10">
      {/* Intro Content */}
      <IntroContent />

      {/* Suggested Jobs */}
      <div className="mt-10">
        {/* Intro text */}
        <p className="text-lg mb-4">
          Here are some job we think you might need.
        </p>

        {/* Suggested Jobs Card */}
        <div className="w-full grid grid-cols-3 gap-6">
          {Array(10)
            .fill(0)
            .map((_, index) => {
              return (
                <SuggestedJobsCard
                  key={index}
                  description="Get your appliances back up and running smoothly."
                  matchConfidence={85}
                  jobLink="/jobs/543874384099"
                  title="Repair an Appliance 🚀"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboardPage;
