import React from "react";
import IntroContent from "./IntroContent";
import SuggestedJobsCard from "./SuggestedJobsCard";

const BuyerDashboardPage = () => {
  return (
    <div className="lg:px-32 md:px-20 px-6 m-auto lg:pt-10 pt-4">
      {/* Intro Content */}
      <IntroContent />

      {/* Suggested Jobs */}
      <div className="lg:mt-10 mt-4">
        {/* Intro text */}
        <p className="text-lg mb-4">
          Here are some job we think you might need.
        </p>

        {/* Suggested Jobs Card */}
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-3">
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
