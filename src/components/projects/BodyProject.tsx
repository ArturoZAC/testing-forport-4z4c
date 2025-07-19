'use client';
import { useInView } from 'react-intersection-observer'
import { IndividualProject } from "./IndividualProject";

export const BodyProject = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <div ref={ref} className="flex flex-col w-full justify-center items-center gap-y-10">
      <IndividualProject inView={inView}/>
      <IndividualProject inView={inView} isOdd={true}/>
      <IndividualProject inView={inView}/>
      <IndividualProject inView={inView} isOdd={true}/>
    </div>
  )
};
