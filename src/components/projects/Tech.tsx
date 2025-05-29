import React from "react";

interface Props {
  text?: string;
}

export const Tech = ( { text = 'React' }: Props) => {
  return (
    <div className="flex max-w-[117px] items-center gap-x-2">
      <div className="w-7 h-7 bg-amber-400 rounded-full shrink-0"></div>
      <div className="min-w-0 small-d text-small-d max-md:text-small-m">
        <p className="break-words text-pretty">{text}</p>
      </div>
    </div>
  )
};
