import { MainContainer } from "../responsive/MainContainer"
import { Description } from "./Description";

export const BodyProject = () => {
  return (
    <div className="flex flex-row w-full justify-center items-center">
      <MainContainer className="flex justify-center gap-x-10 items-stretch h-auto">
        <div className="bg-gray-400 w-full max-w-1/2"></div>
        <Description/>
      </MainContainer>
    </div>
  )
};
