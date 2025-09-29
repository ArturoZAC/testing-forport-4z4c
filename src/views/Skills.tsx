import { BodySkills } from "@/components/skills";
import { Title } from "@/components/ui";
import { getTranslations } from "next-intl/server";

export const Skills = async () => {
  const t = await getTranslations("Titles");
  return (
    <section
      id="skills"
      className="flex flex-col gap-y-20 max-md:gap-y-10 mt-60 bg-linear-to-tl from-violet-600 to-fuchsia-600 py-14 text-primary px-6 scroll-mt-24"
    >
      <Title title={`${t("skills")}`} />
      <BodySkills />
    </section>
  );
};
