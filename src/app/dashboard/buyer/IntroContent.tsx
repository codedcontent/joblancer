/* eslint-disable react/no-unescaped-entities */
import CustomButton from "@/components/customButton/CustomButton";
import React from "react";
import IntroCTACards from "./IntroCTACards";

const IntroContent = () => {
  return (
    <div className="p-8 w-full bg-white rounded-2xl flex justify-center items-center gap-10">
      {/* Hi Intro */}
      <div className="space-y-3 w-[35%]">
        <h1 className="text-4xl font-black">Hi, {"{{username}}"}!</h1>

        <p className="font-light">
          We know you're here because something needs attention—whether it's a
          leaky faucet, a broken appliance, or a project that just can't wait.
          Let's get that taken care of right now.
        </p>

        <div className="w-1/2 pt-4">
          <CustomButton title="Fix my problem" loading={false} />
        </div>
      </div>

      {/* Other CTAs */}
      <div className="w-[65%] grid grid-cols-3 gap-6">
        <IntroCTACards
          ctaTitle="Search"
          ctaColor="bg-gradient-to-b from-[#0074FF] to-[#7DA7D8]"
          ctaLink="/search"
          title="Find a FIXER"
          description="The SEARCH route opens up the AI prompter where they can describe their problem."
        />
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
