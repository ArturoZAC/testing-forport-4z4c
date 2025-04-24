import { MainContainer } from "../responsive/MainContainer"

export const BodyHero = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-[calc(100vh-70px)]">
      <MainContainer className="space-y-5">
        <div className="text-black text-display-m-d text-center">
          <p>Crafting Beautiful & </p>
          <p>Functional Web Experiences</p>
        </div>
        <div className="text-black text-body-large-r-d text-center">
          <p>Hey, I&apos;m Avinash Singh, a Full Stack Developer passionate about building </p>
          <p>performant, user-friendly, and scalable applications.s</p>
        </div>
        <div className="text-body-large-r-d grid place-items-center">
          <button className="bg-[#1f1c1c] w-[180px] p-[10px] rounded-full">My Cv 📍📄</button>
        </div>
      </MainContainer>
    </div>
  )
};
