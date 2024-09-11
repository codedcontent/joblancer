/* eslint-disable react/no-unescaped-entities */
import React from "react";
import BestExpertCard from "./BestExpertCard";

const BestExpertsPage = () => {
  return (
    <div className="lg:px-32 md:px-20 px-6 m-auto lg:pt-10 pt-4 w-full pb-10">
      {/* Intro */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black">Here's what we found!</h1>

        <p className="font-light">
          We found this experts that are best to fix your issue. The (%)
          represent how much we are sure they are the best for you.
        </p>
      </div>

      {/* Best Experts */}
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-3 md:mt-6 mt-3">
        {Array(10)
          .fill(0)
          .map((_, index) => {
            return (
              <BestExpertCard
                key={index}
                description="Get your appliances back up and running smoothly."
                matchConfidence={85}
                jobLink="/jobs/543874384099"
                title="Repair an Appliance"
                categoryIcon="🚀"
              />
            );
          })}
      </div>
    </div>
  );
};

export default BestExpertsPage;
