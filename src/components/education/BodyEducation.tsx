import { MainContainer } from "../responsive/MainContainer"
import { SideLeft } from "./SideLeft"
import { SideMiddle } from "./SideMiddle"
import { SideRight } from "./SideRight"

export const BodyEducation = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <MainContainer className="flex justify-center items-center">
        <SideLeft />
        <SideMiddle />
        <SideRight />
      </MainContainer>
    </div>
  )
}
