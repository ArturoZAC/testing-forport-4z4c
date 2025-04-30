import { MainContainer } from "../responsive/MainContainer";

interface Props {
  title: string;
}

export const Title = ( { title } : Props) => {
  return (
    <div className="flex col justify-center items-center">
      <MainContainer className="flex flex-col justify-center items-center relative after:w-full after:max-w-[548px] after:content-[''] after:block after:h-[4px] after:bg-linear-to-tr after:from-violet-800 after:to-fuchsia-700 after:animate-scaleTitle after:origin-center after:mt-[22px] after:rounded-md ">
        <h2 className="text-h2-r-d">
          { title }
        </h2>
      </MainContainer>
    </div>
  );
};
