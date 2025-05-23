import { MainContainer } from "../responsive/MainContainer"
import { Certifications } from "./Certifications"
import { SideLeft } from "./SideLeft"
import { SideMiddle } from "./SideMiddle"
import { SideRight } from "./SideRight"

export const BodyEducation = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <MainContainer className="flex justify-center items-stretch h-auto">
        <div className="w-1/2 flex flex-col justify-center items-center h-full">
          <SideLeft title="Technological University of Perú" date="JANUARY 2021 - PRESENT" description="I started my studies at this university. I'm learning many things that have served as a foundation for learning the technologies I'll use in the future."/>
          <SideLeft title="Academlo" date="JANURY 2024 - JUNE 2024" description="It was there that I discovered my true passion: web programming. I loved learning technologies like React and Node.js, and seeing how I could build functional applications from scratch."/>
          <SideLeft title="DevTalles" date="DECEMBER 2024 - PRESENT" isLast description="On this platform, I've reviewed and trained in new technologies; I've constantly practiced and reinforced what I've learned with tools like Docker, React, Node.js, Next.js, and others."/>
        </div>
        <SideMiddle />
        <div className="w-1/2 flex flex-col justify-center items-center h-full">
          <SideRight title="Cibertec" date="OCTOBER 2023 - DECEMBER 2023" description="I earned a Java certificate from this institute, where I learned object-oriented programming, connecting to relational databases, and running unit tests."/>
          <SideRight title="Udemy" date="APRIL 2024" description="I took many courses on this platform, most of them from Devtalles, but the one that made the difference was the Figma course on UX/UI, which helped me better understand the user experience"/>
        </div>
      </MainContainer>
      <Certifications />
    </div>
  )
}
