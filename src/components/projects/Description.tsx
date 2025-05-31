import { Tech } from "./Tech";

export const Description = () => {
  return (
    <div className="relative w-full max-w-1/2 max-middle:max-w-full">
      
      
      <div className="absolute bottom-3 right-3 size-20 rounded-full z-0 
      bg-radial-[ellipse_at_50%_75%] from-sky-200 via-blue-400 to-indigo-900" />


      <div className="absolute top-3 -right-20 size-20 rounded-full z-0 
      bg-radial-[ellipse_at_50%_75%] from-sky-200 via-blue-400 to-indigo-900" />


      <div className="w-full bg-fourth/40 rounded-4xl relative backdrop-blur-md backdrop-saturate-150 z-10">
        <div className="flex flex-col gap-y-4 px-7 py-5">
          <div className="space-y-3">
            <p className="subtitle2-b text-subtitle-2-d max-md:text-subtitle-2-m">Title</p>
            <div className="flex gap-x-10 body-large-sm text-body-large-d max-md:text-body-large-m">
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
          <div className="space-y-3 body-small-r text-body-small-d max-md:text-body-small-m">
            <p className="break-words text-pretty">
              As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-3">
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
    </div>
  );
};
