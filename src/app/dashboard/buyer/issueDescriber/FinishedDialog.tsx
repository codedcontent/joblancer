import { TbLoaderQuarter } from "react-icons/tb";

type Props = {};

const FinishedDialog = (props: Props) => {
  return (
    <div className="w-full h-full">
      {/* Title text */}
      <p className="md:text-2xl text-lg font-black md:mb-4 mb-0">
        Thanks for that
      </p>

      {/* Intro text */}
      <p className="font-extralight md:text-base text-sm">
        Ok {"{{username}}"}. We are now matching you with the best experts for
        the job. Please wait a few.
      </p>

      <div className="w-full flex justify-center items-center mt-6">
        <TbLoaderQuarter className="text-4xl animate-spin" />
      </div>
    </div>
  );
};

export default FinishedDialog;
