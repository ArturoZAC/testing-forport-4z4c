'use client';
import Image from "next/image";
import { MainContainer } from "../responsive/MainContainer" 
import { Description } from "./Description";

import { useInView } from 'react-intersection-observer'

export const BodyProject = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <div ref={ref} className="flex flex-row w-full justify-center items-center">
      <MainContainer className="flex justify-center gap-x-10 items-stretch h-auto max-middle:flex-col max-middle:gap-y-10">
        <Image width={ "524" } height={"288"} alt="beach" src={'/projects/beach.jpg'} className={`w-full max-w-1/2 rounded-2xl max-middle:max-w-full ${inView ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`} />
        <Description/>
      </MainContainer>
    </div>
  )
};
