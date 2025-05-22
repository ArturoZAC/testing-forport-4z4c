import { Credits, InfoAdd, MainFoot } from "@/components/footer";
import { MainContainer } from "@/components/responsive/MainContainer";

export const Footer = () => {
  return (
    <section className="flex justify-center items-center bg-linear-to-l from-violet-600 to-fuchsia-600 mt-60 text-primary">
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
