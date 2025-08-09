import { IndividualProject } from "./IndividualProject";

export const BodyProject = () => {

  return (
    <div className="flex flex-col w-full justify-center items-center gap-y-40 max-middle:gap-y-10">
      <IndividualProject/>
      <IndividualProject isOdd={true}/>
      <IndividualProject/>
      <IndividualProject isOdd={true}/>
    </div>
  )
};
