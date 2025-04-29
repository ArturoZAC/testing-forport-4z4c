import { Credits, InfoAdd, MainFoot } from "@/components/footer";
import { MainContainer } from "@/components/responsive/MainContainer";

export const Footer = () => {
  return (
    <section className="flex justify-center items-center bg-linear-to-tr from-violet-800 to-fuchsia-700 mt-30 text-primary">
      <MainContainer className="mt-6">
        <div className="flex flex-row justify-center items-stretch h-fit">
          <MainFoot/>
          <InfoAdd />
        </div>
        <Credits />
      </MainContainer>
    </section>
  );
};
