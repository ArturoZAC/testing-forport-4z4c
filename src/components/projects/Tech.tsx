import React from "react";

interface Props {
  text?: string;
}

export const Tech = ({ text = 'React' }: Props) => {
  return (
    <div className="flex max-w-[117px] items-center gap-x-2">
      <svg className="w-6 h-6">
        <use xlinkHref={`/assets/sprite.svg#react`} />
      </svg>
      <div className="min-w-0 small-d text-small-d max-md:text-small-m">
        <p className="break-words text-pretty">{text}</p>
      </div>
    </div>
  )
};
