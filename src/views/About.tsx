import { BodyAbout } from "@/components/about";
import { Title } from "@/components/ui"; 

export const About = () => {
  return (
    <section id="about" className="flex flex-col gap-y-20 mt-40 mb-40 px-6 scroll-mt-24">
      <Title title="About Me" />
      <BodyAbout/>
    </section>
  );
};
