import { BodyProject } from "@/components/projects";
import { Title } from "@/components/ui";

export const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-y-20 mt-40 px-6 max-middle:gap-y-10 scroll-mt-24">
      <Title title="Projects"/>
      <BodyProject />
    </section>
  )
};
