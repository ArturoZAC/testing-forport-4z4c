import Image from "next/image";

import { Description } from "./Description";
import { MainContainer } from "../responsive/MainContainer";
import { Properties } from "@/interfaces/projects/properties.interface";

export const IndividualProject = (propsProject: Properties) => {
  return (
    <MainContainer className="grid grid-cols-2 gap-x-6 max-screen-image:grid-cols-1">
      <div className="w-full relative max-screen-image:mb-14 flex items-stretch shadow-md shadow-purple-700/50 rounded-2xl">
        <Image
          width={532}
          height={312}
          alt="beach"
          // src={"/projects/beach.jpg"}
          src={propsProject.imageFront}
          draggable={false}
          unoptimized
          className="object-cover rounded-2xl transition-all duration-300 max-screen-image:w-full"
        />
      </div>
      <Description {...propsProject} />
    </MainContainer>
  );
};
