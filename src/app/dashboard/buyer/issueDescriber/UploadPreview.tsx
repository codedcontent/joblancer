import Image from "next/image";
import { IoMdTrash } from "react-icons/io";

type Props = {
  previews: string[];
  handleFileRemoval: (fileIndex: number) => void;
};

const UploadPreview = ({ previews, handleFileRemoval }: Props) => {
  return (
    <div className="grid grid-cols-4 md:gap-4 gap-2 mb-4">
      {previews.map((src, index) => (
        <div key={index} className="relative">
          <Image
            src={src}
            alt={`Preview ${index}`}
            className="w-full h-auto object-cover rounded-md"
            width={500}
            height={500}
          />

          <div
            className="absolute md:bottom-2 bottom-0 md:right-2 right-0 cursor-pointer"
            onClick={() => handleFileRemoval(index)}
          >
            <IoMdTrash className="text-2xl text-danger" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadPreview;
