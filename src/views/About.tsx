import { BodyAbout } from "@/components/about";
import { Title } from "@/components/ui"; 

export const About = () => {
  return (
    <section className="flex flex-col gap-y-20 mt-40">
      <Title title="About Me" />
      <BodyAbout/>
    </section>
  );
};
