import CustomButton from "@/components/customButton/CustomButton";
import React, { useEffect, useRef, useState } from "react";
import { IssueDescriberDialogTypes } from "./IssueDescriber";
import Image from "next/image";

type Props = {
  setCurrentDialog: React.Dispatch<
    React.SetStateAction<IssueDescriberDialogTypes>
  >;
};

const ImageUploadDialog = ({ setCurrentDialog }: Props) => {
  const uploaderInputFileEle = useRef<HTMLInputElement | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleUploaderClick = () => {
    uploaderInputFileEle.current?.click();
  };

  const handleUploaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if (!files) return;

    const fileArray = Array.from(files); // Convert FileList to array
    const imageUrls = fileArray.map((file) => URL.createObjectURL(file)); // Generate preview URLs for each image

    setPreviews(imageUrls);
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
      <p className="text-2xl font-black mb-4">A picture tells us more</p>

      {/* Intro text */}
      <p className="font-extralight">
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
        <div className="grid grid-cols-4 gap-4 mb-4">
          {previews.map((src, index) => (
            <div key={index} className="relative">
              <Image
                src={src}
                alt={`Preview ${index}`}
                className="w-full h-auto object-cover rounded-md"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>

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
