import Image from "next/image";

import { Description } from "./Description";
import { MainContainer } from "../responsive/MainContainer";

export const IndividualProject = ({ isOdd }: { isOdd?: boolean}) => {
  return (
    <MainContainer className={`flex ${ isOdd ? 'flex-row-reverse': ''} justify-center gap-x-10 items-stretch h-auto max-middle:flex-col max-middle:gap-y-10`}>
      <Image width={"524"} height={"288"} alt="beach" src={'/projects/beach.jpg'} className={`w-full max-w-1/2 rounded-2xl max-middle:max-w-full`} />
      <Description isOdd={isOdd}/>
    </MainContainer>
  )
};
