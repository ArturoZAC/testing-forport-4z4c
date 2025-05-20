import { BodyProject } from "@/components/projects";
import { Title } from "@/components/ui";
import React from "react";

export const Projects = () => {
  return (
    <section className="flex flex-col gap-y-18">
      <Title title="Projects"/>
      <BodyProject />
    </section>
  )
};
