import { getProjectsData } from "@/data/projectsData";
import { IndividualProject } from "./IndividualProject";

export const BodyProject = async () => {
  const projectsData = await getProjectsData();

  return (
    <div className="flex flex-col w-full justify-center items-center gap-y-40 max-middle:gap-y-30">
      {projectsData.map((data) => (
        <IndividualProject key={data.title} {...data} />
      ))}
      {/* <IndividualProject isOdd={true} /> */}
      {/* <IndividualProject /> */}
      {/* <IndividualProject isOdd={true} /> */}
    </div>
  );
};
