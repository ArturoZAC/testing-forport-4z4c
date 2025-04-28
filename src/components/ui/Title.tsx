import { MainContainer } from "../responsive/MainContainer";

export const Title = () => {
  return (
    <div className="flex col justify-center items-center">
      <MainContainer className="flex flex-col justify-center items-center relative after:w-full after:max-w-[548px] after:content-[''] after:block after:h-[4px] after:bg-third after:animate-scaleTitle after:origin-center after:mt-[22px]">
        <h2 className="text-h2-r-d">
          About Me
        </h2>
      </MainContainer>
    </div>
  );
};
