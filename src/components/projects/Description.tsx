import { Tech } from "./Tech";

export const Description = () => {
  return (
    <div className="bg-blue-400 w-full max-w-[524px] rounded-4xl overflow-hidden px-7 py-5 ">
      <div className="flex flex-col gap-y-4">
        <div className="space-y-3">
          <p className="text-subtitle2-b-d">Title</p>
          <div className="flex gap-x-10 text-body-large-sm-d">
            <div className="flex justify-center items-center gap-x-3">
              <div className="size-[35px] bg-purple-500"></div>
              <p>Demo</p>
            </div>
            <div className="flex justify-center items-center gap-x-3">
              <div className="size-[35px] bg-purple-500"></div>
              <p>Code</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <p className="break-words">As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt.</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
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
