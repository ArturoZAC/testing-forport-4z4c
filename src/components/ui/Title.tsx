import { MainContainer } from "../responsive/MainContainer";

interface Props {
  title: string;
  isGradient?: boolean;
}

export const Title = ( { title, isGradient } : Props) => {

  const gradientClass = isGradient 
    ? 'after:bg-linear-to-tr after:from-violet-800 after:to-fuchsia-700'
    : 'after:bg-fourth-back'

  return (
    <div className="flex col justify-center items-center">
      <MainContainer className={`flex flex-col justify-center items-center relative after:w-full after:max-w-[548px] after:content-[''] after:block after:h-[4px] ${ gradientClass} after:animate-scaleTitle after:origin-center after:mt-[22px] after:rounded-md`}>
        <h2 className="text-h2-r-d">
          { title }
        </h2>
      </MainContainer>
    </div>
  );
};
