import React from "react";

interface Props {
  text?: string;
}

export const Tech = ( { text = 'Reactasdadadsasdasdadsad' }: Props) => {
  return (
    // <div className="flex gap-x-3 justify-center items-center min-w-[117px]">
    //   <div className="min-w-7 min-h-7 bg-amber-400 rounded-full"></div>
    //   <p className="break-words">{text}</p>
    // </div>
    <div className="flex max-w-[117px] items-start gap-x-2">
      <div className="w-7 h-7 bg-amber-400 rounded-full shrink-0"></div>
      <div className="flex-1 min-w-0">
        <p className="break-words text-sm leading-tight">{text}</p>
      </div>
    </div>
  )
};
