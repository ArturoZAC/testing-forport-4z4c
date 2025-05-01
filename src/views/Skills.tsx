import { BodySkills } from "@/components/skills";
import { Title } from "@/components/ui";

export const Skills = () => {
  return (
    <section className="flex flex-col gap-y-16 mt-30 bg-neutral-700 py-14">
      <Title title="My Skills"/>
      <BodySkills />
    </section>
  );
};
