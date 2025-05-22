import { MainContainer } from "../responsive/MainContainer"
import { SideLeft } from "./SideLeft"
import { SideMiddle } from "./SideMiddle"
import { SideRight } from "./SideRight"

export const BodyEducation = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <MainContainer className="flex justify-center items-stretch h-auto">
        <div className="w-1/2 flex flex-col justify-center items-center h-full">
          <SideLeft />
          <SideLeft />
        </div>
        <SideMiddle />
        <div className="w-1/2 flex flex-col justify-center items-center h-full">
          <SideRight />
          <SideRight />
        </div>
      </MainContainer>
    </div>
  )
}
