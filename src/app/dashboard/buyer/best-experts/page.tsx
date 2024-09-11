"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import BestExpertCard from "./BestExpertCard";
import DetailedExpertCard, {
  DetailedExpertCardProps,
} from "./DetailedExpertCard";

const provider: DetailedExpertCardProps = {
  uid: "dkjsfclkdjc",
  name: "John Doe Plumbing",
  rating: 4.5,
  solutionMatch: 92,
  estimatedCost: { min: 150, max: 250 },
  description:
    "Highly rated for fixing leaks and plumbing issues with 10+ years of experience.",
  requirements: [
    "Client to provide water shut-off valve.",
    "Basic plumbing access required.",
  ],
  timeEstimate: "2-3 hours",
  reviews: [
    {
      customer: "Jane Smith",
      comment: "John was fast and professional.",
      rating: 5,
    },
    {
      customer: "Alex Johnson",
      comment: "Fixed my sink perfectly!",
      rating: 4.5,
    },
  ],
  pastWorkImages: [
    "https://images.unsplash.com/photo-1523413555809-0fb1d4da238d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505281147415-f688150c9b9b?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664298589198-b15ff5382648?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
};

const BestExpertsPage = () => {
  const [showExpertDetailedInfo, setShowExpertDetailedInfo] = useState(false);

  const [detailToExpand, setDetailToExpand] =
    useState<DetailedExpertCardProps | null>(null);

  const handleExpertSelection = (expertId: number) => {
    setShowExpertDetailedInfo(true);
    setDetailToExpand(provider);
  };

  const closeExpertInfo = () => {
    setShowExpertDetailedInfo(false);
    setDetailToExpand(null);
  };

  return (
    <div className="lg:px-32 md:px-20 px-6 m-auto lg:pt-10 pt-4 w-full pb-10">
      {/* Detailed Expert Info */}
      {showExpertDetailedInfo && detailToExpand && (
        <DetailedExpertCard closeExpertInfo={closeExpertInfo} {...provider} />
      )}

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
                handleExpertSelection={handleExpertSelection}
                index={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BestExpertsPage;
