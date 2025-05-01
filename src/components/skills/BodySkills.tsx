import { MainContainer } from "../responsive/MainContainer"

export const BodySkills = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <MainContainer className="flex flex-col gap-y-14">
        <p className="text-pretty text-body-small-r-d">As a software Developer with a background in computer systems, algorithms, and data structures, I have two years of experience in IT and two years of English studies under my belt. I am currently furthering my education in the 42 network for a Master Digital IT Architect degree. Coding and problem-solving through code are my passions, and I am excited to collaborate with talented programmers and expand my knowledge even more!</p>
        <div className="overflow-hidden w-full group">
          <div className="flex flex-row animate-scrollSkills w-max gap-x-10 group-hover:animation-paused">
            {
              [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((value, id) => (
                <div key={id} className="size-[150px] flex flex-col justify-center items-center gap-y-6 bg-blue-900 border-t-3 border-fuchsia-700 rounded-md">
                  <div className="size-[50px] flex justify-center items-center">Icon</div>
                  <p>Docker</p>
                </div>
              ))
            }
          </div>
        </div>
      </MainContainer>
    </div>
  )
}
