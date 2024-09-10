// "use client"

/* eslint-disable react/no-unescaped-entities */
import CustomButton from "@/components/customButton/CustomButton";
import React from "react";
import IntroCTACards from "./IntroCTACards";

type Props = {
  setIsOpenIssueDescriber: React.Dispatch<React.SetStateAction<boolean>>;
};

const IntroContent = ({ setIsOpenIssueDescriber }: Props) => {
  return (
    <div className="lg:p-8 p-3 w-full bg-white lg:rounded-2xl rounded-lg flex md:flex-row flex-col justify-center items-center lg:gap-10 gap-4">
      {/* Hi Intro */}
      <div className="lg:space-y-3 space-y-1 lg:w-[35%] w-full">
        <h1 className="lg:text-4xl text-xl font-black">
          Hi, {"{{username}}"}!
        </h1>

        <p className="font-light">
          We know you're here because something needs attention—whether it's a
          leaky faucet, a broken appliance, or a project that just can't wait.
          Let's get that taken care of right now.
        </p>

        <div className="w-1/2 lg:pt-4 pt-2">
          <CustomButton
            title="Fix my problem"
            loading={false}
            onClick={() => setIsOpenIssueDescriber(true)}
          />
        </div>
      </div>

      {/* Other CTAs */}
      <div className="lg:w-[65%] w-full grid md:grid-cols-3 grid-cols-1 lg:gap-6 gap-2 lg:mt-0 mt-6">
        <div className="md:flex hidden">
          <IntroCTACards
            ctaTitle="Search"
            ctaColor="bg-gradient-to-b from-[#0074FF] to-[#7DA7D8]"
            ctaLink="/search"
            title="Find a FIXER"
            description="The SEARCH route opens up the AI prompter where they can describe their problem."
          />
        </div>
        {/* TODO: The SEARCH route opens up the AI prompter where they can describe their problem. */}

        <IntroCTACards
          ctaTitle="FAQ"
          ctaColor="bg-gradient-to-b from-[#00F0FF] to-[#2D7579]"
          ctaLink="/search"
          title="See some FAQs"
          description="The SEARCH route opens up the AI prompter where they can describe their problem."
        />

        <IntroCTACards
          ctaTitle="Refer"
          ctaColor="bg-gradient-to-b from-[#CC00FF] to-[#68516D]"
          ctaLink="/search"
          title="Refer friends for DISCOUNT"
          description="The SEARCH route opens up the AI prompter where they can describe their problem."
        />
      </div>
    </div>
  );
};

export default IntroContent;
