import { Tech } from "./Tech";

export const Description = () => {
  return (
    <div className="bg-blue-400 w-full max-w-1/2 rounded-4xl">
      <div className="p-9 flex flex-col gap-y-5">
        <p className="text-subtitle2-b-d">Title</p>
        <div className="flex gap-x-10 text-body-large-sm-d">
          <div className="flex justify-center items-center gap-x-4">
            <div className="size-[40px] bg-purple-500"></div>
            <p>Demo</p>
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <div className="size-[40px] bg-purple-500"></div>
            <p>Code</p>
          </div>
        </div>
        <p>As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt.</p>
        <div className="grid grid-cols-4 gap-x-4 gap-z-4">
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
          <Tech />
        </div>
      </div>
    </div>
  )
};
