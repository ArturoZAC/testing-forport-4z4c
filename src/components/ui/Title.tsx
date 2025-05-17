import { MainContainer } from "../responsive/MainContainer";

interface Props {
  title: string;
}

export const Title = ( { title } : Props) => {

  const gradientClass = 'after:bg-linear-to-l after:from-violet-700 after:to-fuchsia-700'

  return (
    <div className="flex col justify-center items-center">
      <MainContainer className={`flex flex-col justify-center items-center relative after:w-full after:max-w-[548px] after:content-[''] after:block after:h-[4px] ${ gradientClass} after:animate-scaleTitle after:origin-center after:mt-[22px] after:rounded-md`}>
        <h2 className="text-h2-sm-d">
          { title }
        </h2>
      </MainContainer>
    </div>
  );
};
