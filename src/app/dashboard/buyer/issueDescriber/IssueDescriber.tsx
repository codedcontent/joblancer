import { allowScroll, preventScroll } from "@/utils/preventScroll";
import React, { useEffect } from "react";

type Props = {};

const IssueDescriber = (props: Props) => {
  useEffect(() => {
    preventScroll();

    return () => allowScroll();
  }, []);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-black/50 flex justify-center items-center z-50">
      IssueDescriber
    </div>
  );
};

export default IssueDescriber;
