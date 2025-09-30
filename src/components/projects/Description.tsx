import Link from "next/link";
import { Tech } from "./Tech";
import { Properties } from "@/interfaces/projects/properties.interface";

export const Description = ({
  isOdd,
  title,
  links,
  description,
  stack,
  video,
}: Properties) => {
  return (
    // <div className={`relative w-full max-w-1/2 max-middle:max-w-full `}>
    <div className="relative">
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          isOdd ? "-left-1" : "-right-1"
        } h-[calc(100%-25px)] w-2 rounded-full z-0 bg-gradient-to-b from-violet-600 to-fuchsia-600 blur-[2px]`}
      />
      <div className="w-full bg-fourth rounded-2xl relative backdrop-blur-[10px] backdrop-saturate-150 z-10 h-full">
        <div className="flex flex-col gap-y-4 p-5 max-sm:px-5  h-full">
          <div className="space-y-3">
            <div className="flex flex-row justify-between">
              <p className="subtitle2-b text-lead-d max-md:text-lead-m">
                {title}
              </p>
              {video && (
                <Link
                  target="_blank"
                  href={video}
                  className="flex justify-center items-center gap-x-2 text-body-small-d max-md:text-body-small-m font-semibold"
                >
                  <svg className="w-6 h-6">
                    <use xlinkHref={`/assets/sprite.svg#youtube`} />
                  </svg>
                  <p>Video</p>
                </Link>
              )}
            </div>
            <div className="flex gap-x-6 body-large-sm text-body-small-d max-md:text-body-small-m">
              {links?.map(({ name, url, nameSvg }) => (
                <Link
                  target="_blank"
                  key={name}
                  href={url}
                  className="flex justify-center items-center gap-x-2"
                >
                  <svg className="w-6 h-6">
                    <use xlinkHref={`/assets/sprite.svg#${nameSvg}`} />
                  </svg>
                  <p>{name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3 body-small-r text-body-small-d max-md:text-body-small-m">
            <p className="break-words text-justify">{description}</p>
          </div>
          <div className="flex flex-row flex-wrap justify-around gap-4">
            {stack?.map((name) => (
              <Tech key={name} text={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
