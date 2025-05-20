import React from "react";

interface Props {
  text?: string;
}

export const Tech = ( { text = 'React' }: Props) => {
  return (
    <div className="flex max-w-[117px] items-center gap-x-2">
      <div className="w-7 h-7 bg-amber-400 rounded-full shrink-0"></div>
      <div className="min-w-0">
        <p className="break-words text-small-sm-d">{text}</p>
      </div>
    </div>
  )
};
