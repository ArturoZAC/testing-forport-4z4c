import { MainContainer } from "../responsive/MainContainer";

interface Props {
  title: string;
  isGradient?: boolean;
}

export const Title = ( { title, isGradient = true } : Props) => {

  const gradientClass = isGradient 
    ? 'after:bg-linear-to-r after:from-violet-800 after:to-fuchsia-700'
    // : 'after:bg-fourth-back'
    : 'after:bg-linear-to-l after:from-violet-800 after:to-fuchsia-800'
    // : 'after:bg-linear-to-br from-violet-600 to-fuchsia-600'

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
