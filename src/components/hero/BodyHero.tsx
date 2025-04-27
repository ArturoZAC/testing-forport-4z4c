import Image from "next/image";
import { MainContainer } from "../responsive/MainContainer"
// import { GradientLine } from "./GradientLine";

export const BodyHero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-[calc(100vh-70px)]">
      <MainContainer className="space-y-[15px] relative">
        <div className="text-tiny-b-d grid place-items-center z-10 relative">
          <button className="bg-[#0A0A0A] max-w-full py-3 px-4 rounded-full border-2 border-neutral-600">
            Actively Seeking Job Opportunities
          </button>
        </div>
        <div className="text-display-m-d text-center z-10 relative">
          <p>Crafting Beautiful & </p>
          <p>Functional Web Experiences</p>
        </div>
        <div className="text-body-large-r-d text-center z-10 relative">
          <p>Hey, I&apos;m Arturo Araujo, a Full Stack Developer passionate about building </p>
          <p>performant, user-friendly, and scalable applications</p>
        </div>
        <div className="text-body-large-r-d grid place-items-center z-10 relative">
          <button className="bg-[#0A0A0A] w-[180px] p-[10px] rounded-full border border-neutral-600">My Cv 📍📄</button>
        </div>

        <div className="flex justify-center items-center relative bottom-20">
          <div className="flex justify-center items-center absolute ">
            <Image src="/custom/off-arc.png" alt="bg" width={950} height={430} className="mask-x-from-70% mask-x-to-90%"/>
          </div>
        </div>
      </MainContainer>
    </div>
  )
};
