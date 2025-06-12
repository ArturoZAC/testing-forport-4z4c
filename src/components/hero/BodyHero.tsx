import { MainContainer } from "../responsive/MainContainer"
import { BackImage } from "./BackImage";

export const BodyHero = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[70px] max-md:pt-[60px] h-[calc(100vh)]">
      <MainContainer className="space-y-[15px] relative">
        <div className="tiny-b text-tiny-d max-md:text-tiny-m grid place-items-center overflow-hidden relative text-secondary">
          <button className="relative z-9 bg-primary max-w-full py-[6px] px-[16px] rounded-full border-2 border-border overflow-hidden">
            <span className="absolute top-[-8px] left-[-50px] w-[20px] h-[45px] animate-shine rounded-tl-2xl rounded-br-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></span>
            Actively Seeking Job Opportunities
          </button>
        </div> 

        <div className="display-sm text-display-d max-md:text-display-m max-md:tracking-[-0.01em] text-center text-balance bg-gradient-to-l from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">
          <h1>Crafting Beautiful & Functional Web Experiences</h1>
        </div>
        <div className="body-small-r text-body-small-d max-md:text-body-small-m text-center text-secondary">
          <p>Hey, I&apos;m Arturo, a Full Stack Developer passionate about building </p>
          <p>performant, user-friendly, and scalable applications</p>
        </div>
        <div className="small-sm text-small-d max-md:text-small-m  flex justify-center text-secondary gap-x-4">
          <button className="bg-primary w-fit px-4 py-2 rounded-full border-2 border-border">
            Download Cv 📍📄
          </button>
        </div>
        <BackImage />
      </MainContainer>
    </div>
  )
};
