import { BodySkills } from "@/components/skills";
import { Title } from "@/components/ui";

export const Skills = () => {
  return (
    <section className="flex flex-col gap-y-12 mt-30 bg-linear-to-tl from-violet-600 to-fuchsia-600  py-14 text-primary">
      <Title title="My Skills"/>
      <BodySkills />
    </section>
  );
};
