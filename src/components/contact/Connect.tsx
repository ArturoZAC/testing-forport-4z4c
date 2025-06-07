import Link from "next/link";

const connectSvgs = [
  {
    id: "contactTwitter",
    name: "Twitter",
  },
  {
    id: "contactFacebook",
    name: "Facebook"
  },
  {
    id: "contactLinkedin",
    name: "LinkedIn"
  },
  {
    id: "contactInstagram",
    name: "Instagram"
  }
]



export const Connect = () => {
  return (
    <div className="w-full max-w-1/2 max-md:max-w-full bg-fourth rounded-2xl h-[inherit]">
      <div className="py-10 px-8 flex flex-col gap-y-10 body-small-r text-body-small-d max-md:text-body-small-m">
        <p className="subtitle1-b text-subtitle-1-d max-md:text-subtitle-1-m  bg-gradient-to-l from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">Leave a message and connect with us</p>
        <p>Whether it’s feedback, collaboration, or simple curiosity, your message matters. Connect with us and let’s create something meaningful together.</p>
        <div className="grid grid-cols-2 max-sm:gap-x-10 gap-y-10 max-sm:gap-y-5 justify-items-center items-center w-full max-middle:w-full">
        {
          connectSvgs.map((svg, id) => (
            <Link href={`/${svg.id}`} key={id}>
              <div className="flex flex-col items-center gap-y-3">
                <svg className="w-9 h-9 max-md:w-7 max-md:h-7">
                  <use xlinkHref={`/assets/sprite.svg#${svg.id}`} />
                </svg>
                <p className="small-r text-small-d max-md:text-small-m">{svg.name}</p>
              </div>
            </Link>
          ))
        }
        </div>
      </div>
    </div>

  );
};
