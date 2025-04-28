import { MainContainer } from "../responsive/MainContainer"
import { BackImage } from "./BackImage";
// import { GradientLine } from "./GradientLine";

export const BodyHero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-[calc(100vh-70px)]">
      <MainContainer className="space-y-[15px] relative">
        <div className="text-tiny-b-d grid place-items-center overflow-hidden relative">
          <button className="relative z-9 bg-[#0A0A0A] max-w-full py-[6px] px-[16px] rounded-full border-2 border-neutral-600 overflow-hidden">
            <span className="absolute top-[-10px] left-[-50px] w-[50px] h-[50px] animate-shine rounded-tr-4xl rounded-bl-4xl bg-gradient-to-t from-transparent via-white to-transparent "></span>
            Actively Seeking Job Opportunities
          </button>
        </div>

        <div className="text-display-m-d text-center bg-gradient-to-r from-[#f7dcff] to-third-back text-transparent bg-clip-text">
          <p>Crafting Beautiful & </p>
          <p>Functional Web Experiences</p>
        </div>
        <div className="text-body-large-r-d text-center ">
          <p>Hey, I&apos;m Arturo Araujo, a Full Stack Developer passionate about building </p>
          <p>performant, user-friendly, and scalable applications</p>
        </div>
        <div className="text-body-large-r-d grid place-items-center ">
          <button className="bg-[#0A0A0A] w-fit px-4 py-2 rounded-full border border-neutral-600">
            Download Cv 📍📄
          </button>
        </div>

        <BackImage />
      </MainContainer>
    </div>
  )
};
