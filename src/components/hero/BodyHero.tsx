import { MainContainer } from "../responsive/MainContainer"
import { BackImage } from "./BackImage";

export const BodyHero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-70px)]">
      <MainContainer className="space-y-[15px] relative">
        <div className="text-tiny-b-d grid place-items-center overflow-hidden relative text-secondary">
          <button className="relative z-9 bg-primary max-w-full py-[6px] px-[16px] rounded-full border-3 border-border overflow-hidden">
            <span className="absolute top-[-8px] left-[-50px] w-[20px] h-[45px] animate-shine rounded-tl-2xl rounded-br-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></span>
            Actively Seeking Job Opportunities
          </button>
        </div> 

        <div className="text-display-m-d text-center bg-gradient-to-l from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">
          <p>Crafting Beautiful & </p>
          <p>Functional Web Experiences</p>
        </div>
        <div className="text-body-large-r-d text-center text-secondary">
          <p>Hey, I&apos;m Arturo Araujo, a Full Stack Developer passionate about building </p>
          <p>performant, user-friendly, and scalable applications</p>
        </div>
        <div className="text-body-large-r-d flex justify-center text-secondary gap-x-4">
          <button className="bg-primary w-fit px-3 py-2 rounded-full border-3 border-border">
            Download Cv 📍📄
          </button>

          <button className="bg-primary w-fit px-3 py-2 rounded-full border-3 border-border">
            Download Cv 📍📄
          </button>
        </div>

        <BackImage />
      </MainContainer>
    </div>
  )
};
