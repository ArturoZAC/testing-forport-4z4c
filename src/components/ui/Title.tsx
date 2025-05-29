import { MainContainer } from "../responsive/MainContainer";

interface Props {
  title: string;
}

export const Title = ( { title } : Props) => {

  const gradientClass = 'after:bg-linear-to-l after:from-violet-700 after:to-fuchsia-700'

  return (
    <div className="flex col justify-center items-center">
      <MainContainer className={`flex flex-col justify-center items-center relative after:w-full after:max-w-[548px] after:content-[''] after:block after:h-[4px] ${ gradientClass} after:animate-scaleTitle after:origin-center after:mt-[22px] max-md:after:mt-[16px] after:rounded-md`}>
        <h2 className="h2-sm text-h2-d max-md:text-h2-m max-md:tracking-[0rem]">
          { title }
        </h2>
      </MainContainer>
    </div>
  );
};
