import { BodyAbout } from "@/components/about";
import { Title } from "@/components/ui"; 

export const About = () => {
  return (
    <section className="flex flex-col gap-y-[65px] mt-20">
      <Title />
      <BodyAbout/>
    </section>
  );
};
