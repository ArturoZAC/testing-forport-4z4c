import Link from "next/link";

const svgs = [
  {
    link: "/a",
    id: "twitter"
  },
  {
    link: "/b",
    id: "instagram"
  },
  {
    link: "/c",
    id: "linkedin"
  },
  {
    link: "/d",
    id: "facebook"
  },
];

export const MainFoot = () => {
  return (
    <div className="small-sm text-small-d max-md:text-small-m px-7 pt-7 flex flex-col max-lg:w-full w-1/2 h-auto justify-between max-md:px-0 gap-y-0 max-lg:gap-y-5">
      <div className="flex flex-col gap-y-10 max-md:gap-y-5">
        <p className="subtitle2-b text-subtitle-2-d max-md:text-subtitle-2-m">4Z4C - Arturo</p>
        <p>A passionate software developer with expertise in both low-level programming and web development technologies, skilled in crafting efficient algorithms, building intuitive front-end systems and user interfaces, and developing scalable back-end architectures using modern frameworks and best practices.</p>
      </div>
      <div className="flex flex-row gap-x-8">
        {
          svgs.map( ( svg ) => (
            <Link href={svg.link} key={svg.link} className="flex items-center justify-center rounded-full">
              <svg className={
                svg.id === 'twitter' 
                  ? "w-[22px] h-[22px] max-md:w-[16px] max-md:h-[16px]"
                  : "w-[26px] h-[26px] max-md:w-[20px] max-md:h-[20px]"
                }>
                <use xlinkHref={`/assets/sprite.svg#${svg.id}`} />
              </svg>
            </Link>
          ))
        }
      </div>
    </div>
  );
};
