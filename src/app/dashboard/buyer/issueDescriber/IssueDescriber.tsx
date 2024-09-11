"use client";

import React, { useEffect, useState } from "react";
import DescriptionDialog from "./DescriptionDialog";
import { IoClose } from "react-icons/io5";
import ImageUploadDialog from "./ImageUploadDialog";
import { allowScroll, preventScroll } from "@/utils/preventScroll";
import FinishedDialog from "./FinishedDialog";

type Props = {
  setIsOpenIssueDescriber: React.Dispatch<React.SetStateAction<boolean>>;
};

export type IssueDescriberDialogTypes =
  | "description"
  | "image-video"
  | "finished";

const IssueDescriber = ({ setIsOpenIssueDescriber }: Props) => {
  // current dialog state
  const [currentDialog, setCurrentDialog] =
    useState<IssueDescriberDialogTypes>("description");

  // UseEffect to manage scroll while backdrop open
  useEffect(() => {
    preventScroll();

    return () => allowScroll();
  }, []);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-black/50 flex justify-center items-center z-50">
      {/* Main content */}
      <div className="md:min-w-96 md:max-w-[40%] max-w-[80%] bg-white min-h-64 rounded-lg flex justify-center items-center p-6 relative">
        {/* close button */}
        <div
          className="p-1 rounded-full bg-danger text-white cursor-pointer absolute -top-[8%] -right-[5%]"
          onClick={() => setIsOpenIssueDescriber(false)}
        >
          <IoClose className="text-xl" />
        </div>

        {/* Describe Issue Dialog */}
        {currentDialog === "description" && (
          <DescriptionDialog setCurrentDialog={setCurrentDialog} />
        )}

        {/* Upload images/video dialog / Image Preview dialog */}
        {currentDialog === "image-video" && (
          <ImageUploadDialog setCurrentDialog={setCurrentDialog} />
        )}

        {/* Finished/Thanks dialog */}
        {currentDialog === "finished" && <FinishedDialog />}
      </div>
    </div>
  );
};

export default IssueDescriber;
