import { BodySkills } from "@/components/skills";
import { Title } from "@/components/ui";

export const Skills = () => {
  return (
    <section className="flex flex-col gap-y-16 mt-30 bg-linear-to-tr from-violet-800 to-fuchsia-700  py-14 text-primary">
      <Title title="My Skills"/>
      <BodySkills />
    </section>
  );
};
