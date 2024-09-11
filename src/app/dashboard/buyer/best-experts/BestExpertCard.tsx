import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

type Props = {
  title: string;
  description: string;
  jobLink: string;
  matchConfidence: number;
  categoryIcon: string;
};

const BestExpertCard = ({
  description,
  matchConfidence,
  jobLink,
  title,
  categoryIcon,
}: Props) => {
  return (
    <div className="w-full bg-white lg:p-6 p-4 rounded-xl space-y-4">
      {/* Title */}
      <div className="flex w-full justify-between items-center">
        <p className="font-black text-lg">{title}</p>

        <div className="flex justify-center items-center h-8 w-8 rounded-full bg-primary/80">
          <p className="font-black text-xs">{categoryIcon}</p>
        </div>
      </div>

      {/* Description */}
      <p className="font-extralight">{description}</p>

      {/* Bottom Comp. */}
      <div className="flex justify-between items-center">
        <div className="w-max">
          <Link
            href={jobLink}
            className="w-full py-2.5 px-5 rounded-lg text-center bg-primary text-white flex items-center gap-4"
          >
            <span>Hire this experts</span>

            <FaAngleRight />
          </Link>
        </div>

        <div className="bg-success rounded-full h-10 w-10 flex justify-center items-center">
          <p className="font-bold text-white text-xs">{matchConfidence}%</p>
        </div>
      </div>
    </div>
  );
};

export default BestExpertCard;
