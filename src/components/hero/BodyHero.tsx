import { MainContainer } from "../responsive/MainContainer"
import { GradientLine } from "./GradientLine";

export const BodyHero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-[calc(100vh-70px)]">
      <MainContainer className="space-y-5 relative">
      <div className="text-tiny-b-d grid place-items-center">
          <button className="bg-[#0A0A0A] max-w-full py-3 px-4 rounded-full border border-neutral-600">Actively Seeking Job Opportunities</button>
        </div>
        <div className="text-display-m-d text-center">
          <p>Crafting Beautiful & </p>
          <p>Functional Web Experiences</p>
        </div>
        <div className="text-body-large-r-d text-center">
          <p>Hey, I&apos;m Avinash Singh, a Full Stack Developer passionate about building </p>
          <p>performant, user-friendly, and scalable applications.s</p>
        </div>
        <div className="text-body-large-r-d grid place-items-center">
          <button className="bg-[#0A0A0A] w-[180px] p-[10px] rounded-full border border-neutral-600">My Cv 📍📄</button>
        </div>

        <GradientLine />
      {/* <div
        className="absolute pointer-events-none -mt-32 h-96 w-screen max-w-[1208px] overflow-hidden 
                   [mask-image:linear-gradient(white,transparent)] 
                   before:absolute before:inset-0 
                   before:bg-[linear-gradient(to bottom,#1a237e,transparent_80%)] 
                   before:opacity-60"
        style={{ opacity: 1 }}
      >
        <div
          className="absolute top-1/2 -left-1/2 z-20 w-[200%] border-t-4 border-t-[#d0e8ff] 
                     bg-[#0a0a0a] 
                     shadow-[inset_0_2px_20px_#d0e8ff,0_-10px_50px_1px_#d0e8ffb3]"
          style={{ opacity: 1, transform: "none" }}
        ></div>
      </div> */}
      </MainContainer>
      
    </div>
  )
};
