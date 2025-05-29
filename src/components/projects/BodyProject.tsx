import Image from "next/image";
import { MainContainer } from "../responsive/MainContainer"
import { Description } from "./Description";

export const BodyProject = () => {
  return (
    <div className="flex flex-row w-full justify-center items-center">
      <MainContainer className="flex justify-center gap-x-10 items-stretch h-auto max-lg:flex-col max-lg:gap-y-10">
        <Image width={"524"} height={"306"} alt="beach" src={'/projects/beach.jpg'} className="bg-gray-400 w-full max-w-[524px] rounded-4xl max-lg:max-w-full" />
        <Description/>
      </MainContainer>
    </div>
  )
};
