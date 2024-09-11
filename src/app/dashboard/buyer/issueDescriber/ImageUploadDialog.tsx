import CustomButton from "@/components/customButton/CustomButton";
import React, { useEffect, useRef, useState } from "react";
import { IssueDescriberDialogTypes } from "./IssueDescriber";
import UploadPreview from "./UploadPreview";
import { removeItemAtIndex } from "@/utils/removeItemAtIndex";

type Props = {
  setCurrentDialog: React.Dispatch<
    React.SetStateAction<IssueDescriberDialogTypes>
  >;
};

const ImageUploadDialog = ({ setCurrentDialog }: Props) => {
  const uploaderInputFileEle = useRef<HTMLInputElement | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [issueImages, setIssueImages] = useState<File[] | null>(null);

  const handleUploaderClick = () => {
    uploaderInputFileEle.current?.click();
  };

  // Handle the user selecting image
  const handleUploaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if (!files) return;

    const fileArray = Array.from(files); // Convert FileList to array

    const imageUrls = fileArray
      .slice(0, 4)
      .map((file) => URL.createObjectURL(file)); // Generate preview URLs for each image

    setPreviews(imageUrls);
    setIssueImages(fileArray);
  };

  //   Handle user removing a preview
  const handleFileRemoval = (filedIndex: number) => {
    // Remove file from preview
    setPreviews(removeItemAtIndex(filedIndex, previews));

    // Remove file from IssueImages
    setIssueImages(removeItemAtIndex(filedIndex, issueImages as File[]));
  };

  // Cleanup to revoke object URLs
  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url)); // Preview URLs Cleanup
    };
  }, [previews]);

  return (
    <div className="w-full h-full">
      {/* Title text */}
      <p className="md:text-2xl text-lg font-black md:mb-4 mb-0">
        A picture tells us more
      </p>

      {/* Intro text */}
      <p className="font-extralight md:text-base text-sm">
        Ok {"{{username}}"}. Can you upload a picture or video? This will tell
        the expert more about the issue.
      </p>

      {/* Action Content */}
      <div className="w-full mb-4 mt-2">
        {/* Hidden */}
        <input
          type="file"
          className="hidden"
          id="ImageUploadDialogUploader"
          ref={uploaderInputFileEle}
          onChange={handleUploaderChange}
          accept="image/*,video/*"
          multiple
          max={4}
        />

        {/* Image Preview */}
        <UploadPreview
          previews={previews}
          handleFileRemoval={handleFileRemoval}
        />

        {/* Button */}
        <div
          className="w-full border-dashed border-2 border-primary bg-primary/25 flex justify-center items-center py-4 cursor-pointer"
          onClick={handleUploaderClick}
        >
          + Add pictures of videos
        </div>
      </div>

      {/* CTA */}
      <CustomButton
        loading={false}
        title="Finish"
        onClick={() => setCurrentDialog("finished")}
      />
    </div>
  );
};

export default ImageUploadDialog;
