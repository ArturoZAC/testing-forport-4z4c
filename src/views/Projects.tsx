import { BodyProject } from "@/components/projects";
import { Title } from "@/components/ui";
import { getTranslations } from "next-intl/server";

export const Projects = async () => {
  const t = await getTranslations("Titles");
  return (
    <section
      id="projects"
      className="flex flex-col gap-y-20 mt-40 px-6 max-screen-image::gap-y-25 scroll-mt-24"
    >
      <Title title={`${t("projects")}`} />
      <BodyProject />
    </section>
  );
};
