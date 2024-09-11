import HireNow from "@/app/hire/[slug]/hireNow/HireNow";
import CustomButton from "@/components/customButton/CustomButton";
import LinkButton from "@/components/linkButton/LinkButton";
import { allowScroll, preventScroll } from "@/utils/preventScroll";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export type DetailedExpertCardProps = {
  name: string;
  uid: string;
  rating: number;
  solutionMatch: number;
  estimatedCost: { min: number; max: number };
  description: string;
  requirements: string[];
  timeEstimate: string;
  reviews: { customer: string; comment: string; rating: number }[];
  pastWorkImages: string[];
};

const DetailedExpertCard = (
  props: DetailedExpertCardProps & {
    closeExpertInfo: () => void;
  }
) => {
  const [showCostBreakdown, setShowCostBreakdown] = useState(false);
  const [isHiring, setIsHiring] = useState(false);

  useEffect(() => {
    preventScroll();

    return () => {
      allowScroll();
    };
  }, []);

  return (
    // Overlay/Backdrop
    <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-black/70 flex justify-center items-center z-50">
      {/* close button */}
      <div
        className="p-1 rounded-full bg-danger text-white cursor-pointer absolute top-[2%] right-[2%]"
        onClick={() => props.closeExpertInfo()}
      >
        <IoClose className="text-4xl" />
      </div>

      {/* Main Content */}
      <div className="relative h-[85%] w-[40%] bg-white overflow-y-scroll rounded-lg p-6 space-y-6">
        {/* Intro - Match personal details */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>{" "}
            {/* Placeholder for profile photo */}
            <div>
              <h2 className="text-xl font-semibold">{props.name}</h2>
              <p className="text-sm text-gray-500">⭐ {props.rating} / 5.0</p>
            </div>
          </div>
          <div>
            <p className="text-green-500 font-bold text-lg">
              {props.solutionMatch}% Match
            </p>
          </div>
        </div>

        {/* Problem Match Description */}
        <p className="text-gray-700 mb-4">{props.description}</p>

        {/* Cost Breakdown */}
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Estimated Cost: ${props.estimatedCost.min} - $
            {props.estimatedCost.max}
          </p>
          <button
            className="text-blue-500 text-sm underline"
            onClick={() => setShowCostBreakdown(!showCostBreakdown)}
          >
            {showCostBreakdown ? "Hide Cost Breakdown" : "View Cost Breakdown"}
          </button>
          {showCostBreakdown && (
            <div className="mt-2 p-4 bg-gray-100 rounded-lg text-sm text-gray-700">
              <p>Labor: $100</p>
              <p>Materials: $50 - $100</p>
              <p>Travel Fee: $10</p>
            </div>
          )}
        </div>

        {/* Job Requirements & Time */}
        <div className="mb-4">
          <p className="font-semibold">Job Requirements:</p>
          <ul className="list-disc pl-5">
            {props.requirements.map((req, idx) => (
              <li key={idx} className="text-gray-600">
                {req}
              </li>
            ))}
          </ul>
        </div>

        <p className="font-semibold mb-4">
          Time Estimate: {props.timeEstimate}
        </p>

        {/* Reviews */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Reviews:</p>

          <div className="gap-2 grid md:grid-cols-2 grid-cols-1">
            {props.reviews.slice(0, 2).map((review, idx) => (
              <div key={idx} className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">{review.customer}</p>
                <p className="text-sm text-gray-600">{review.comment}</p>
                <p className="text-yellow-500">⭐ {review.rating}/5</p>
              </div>
            ))}
          </div>
          <button className="text-blue-500 text-sm underline mt-2">
            See more reviews
          </button>
        </div>

        {/* Past Work Images */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Past Work:</p>
          <div className="flex space-x-2">
            {props.pastWorkImages.map((image, idx) => (
              <Image
                key={idx}
                src={image}
                alt="Past Work"
                className="w-16 h-16 rounded-lg object-cover"
                width={500}
                height={500}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {!isHiring && (
          <div className="bg-white py-4 flex justify-between items-center px-6 border-t pt-4">
            <div className="w-max">
              <CustomButton
                title="Hire now"
                loading={false}
                onClick={() => setIsHiring(true)}
              />
            </div>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg">
              Message props
            </button>
          </div>
        )}
      </div>

      {isHiring && (
        <div className="w-screen h-full absolute top-0 left-0 bg-black/60 overflow-hidden flex justify-center items-center z-50">
          <HireNow initialCost={200} close={() => setIsHiring(false)} />
        </div>
      )}
    </div>
  );
};

export default DetailedExpertCard;
