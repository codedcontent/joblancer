import CustomButton from "@/components/customButton/CustomButton";
import LinkButton from "@/components/linkButton/LinkButton";
import React from "react";

type Props = {
  title: string;
  description: string;
  jobLink: string;
  matchConfidence: number;
};

const SuggestedJobsCard = ({
  description,
  matchConfidence,
  jobLink,
  title,
}: Props) => {
  return (
    <div className="w-full bg-white p-6 rounded-xl space-y-2">
      <p className="font-black text-lg">{title}</p>

      <p className="font-extralight">{description}</p>

      <div className="flex justify-between items-center">
        <div className="w-max">
          <LinkButton buttonLink={jobLink} title="Get an expert" />
        </div>

        <div className="rounded-full p-2">
          <p className="font-bold">{matchConfidence}%</p>
        </div>
      </div>
    </div>
  );
};

export default SuggestedJobsCard;
