import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  ctaLink: string;
  ctaTitle: string;
  ctaColor: string;
  description: string;
};

const IntroCTACards = ({
  title,
  ctaLink,
  ctaTitle,
  ctaColor,
  description,
}: Props) => {
  return (
    <div
      className={`lg:px-12 px-5 lg:py-8 py-4 rounded-md flex flex-col justify-center items-start lg:gap-12 gap-3 ${ctaColor}`}
    >
      <div className="space-y-1">
        <p className="font-black lg:text-xl text-lg text-white">{title}</p>

        {/* <p className="font-extralight">{description}</p> */}
      </div>

      <div className="flex w-full mt-auto">
        <Link
          href={ctaLink}
          className="py-3 px-4 w-full text-center uppercase rounded-md bg-primary text-white font-semibold"
        >
          {ctaTitle}
        </Link>
      </div>
    </div>
  );
};

export default IntroCTACards;
