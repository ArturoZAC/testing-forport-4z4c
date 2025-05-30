import Image from "next/image";
import { MainContainer } from "../responsive/MainContainer"
import { Description } from "./Description";

export const BodyProject = () => {
  return (
    <div className="flex flex-row w-full justify-center items-center">
      <MainContainer className="flex justify-center gap-x-10 items-stretch h-auto max-middle:flex-col max-middle:gap-y-10">
        {/* <Image width={ "1000" } height={"306"} alt="beach" src={'/projects/beach.jpg'} className="w-full max-w-1/2 rounded-4xl max-middle:max-w-full"/> */}
        <div className="bg-gray-500 w-full max-w-1/2 rounded-4xl max-middle:max-w-full">a</div>
        <Description/>
      </MainContainer>
    </div>
  )
};
