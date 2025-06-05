import { MainContainer } from "../responsive/MainContainer";
import { AboutCard } from "./AboutCard";
import { CardContainer } from "./CardContainer";

export const BodyAbout = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <MainContainer className="flex flex-row justify-center items-center gap-x-10 max-md:flex-col max-md:gap-y-10">
        <AboutCard />
        <CardContainer />
      </MainContainer>
    </div>
  );
};
