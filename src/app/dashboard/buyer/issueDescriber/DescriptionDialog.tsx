import CustomButton from "@/components/customButton/CustomButton";
import React from "react";
import { IssueDescriberDialogTypes } from "./IssueDescriber";

type Props = {
  setCurrentDialog: React.Dispatch<
    React.SetStateAction<IssueDescriberDialogTypes>
  >;
};

const DescriptionDialog = ({ setCurrentDialog }: Props) => {
  return (
    <div className="w-full h-full">
      {/* Title text */}
      <p className="md:text-2xl text-lg font-black md:mb-4 mb-0">
        Describe your Issue
      </p>

      {/* Intro text */}
      <p className="font-extralight md:text-base text-sm">
        Ok {"{{username}}"}. Please give a detailed description abut the issue
        so our trained AI can match you with the best expert for the issue
      </p>

      {/* Action Content */}
      <textarea
        name="describeIssueTextarea"
        id="describeIssueTextarea"
        className="outline-none border-2 w-full min-h-20 rounded-md py-2 px-3 placeholder:text-sm mb-4 mt-2 max-h-60 md:text-base text-sm"
        placeholder="Type in here..."
      ></textarea>

      {/* CTA */}
      <CustomButton
        loading={false}
        title="Submit"
        onClick={() => setCurrentDialog("image-video")}
      />
    </div>
  );
};

export default DescriptionDialog;
