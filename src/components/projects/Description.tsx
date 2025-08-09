import Link from "next/link";
import { Tech } from "./Tech";


export const Description = ({ isOdd }: { isOdd?: boolean}) => {

  return (
    <div className={`relative w-full max-w-1/2 max-middle:max-w-full`}>
      <div className={`absolute top-1/2 -translate-y-1/2 ${ isOdd ? '-left-1': '-right-1' } h-[calc(100%-25px)] w-2 rounded-full z-0 bg-gradient-to-b from-violet-600 to-fuchsia-600 blur-[2px]`} />
      <div className="w-full bg-fourth rounded-2xl relative backdrop-blur-[10px] backdrop-saturate-150 z-10 h-full">
        <div className="flex flex-col gap-y-4 px-7 max-sm:px-5 py-5 h-full">
          <div className="space-y-3">
            <p className="subtitle2-b text-subtitle-2-d max-md:text-subtitle-2-m">Title</p>
            <div className="flex gap-x-10 body-large-sm text-body-large-d max-md:text-body-large-m">
              <Link href={"/"} className="flex justify-center items-center gap-x-3">
                <svg className="w-6 h-6">
                  <use xlinkHref={`/assets/sprite.svg#demo`} />
                </svg>
                <p>Demo</p>
              </Link>
              <Link href={"/"} className="flex justify-center items-center gap-x-3">
                <svg className="w-6 h-6">
                  <use xlinkHref={`/assets/sprite.svg#github`} />
                </svg>
                <p>Code</p>
              </Link>
            </div>
          </div>
          <div className="space-y-3 body-small-r text-body-small-d max-md:text-body-small-m">
            <p className="break-words text-justify">
              As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2 max-sm:grid-cols-3">
            <Tech />
          </div>
        </div>
      </div>
    </div>
  );
};
