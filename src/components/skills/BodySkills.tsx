import { svgsSkills } from "@/data";
import { MainContainer } from "../responsive/MainContainer"

export const BodySkills = () => {

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <MainContainer className="flex flex-col gap-y-14">
        <p className="text-pretty body-small-sm text-body-small-d max-md:text-body-small-m">Here are the powerful tools and technologies I use to bring your idea to life. From modern front-end frameworks to robust back-end systems, I build comprehensive and scalable solutions tailored to your specific needs. I focus on delivering high-quality, well-structured products with a lasting impact, ensuring a solid experience for both users and clients. Whether you&apos;re starting a new project or improving an existing one, I&apos;m ready to help take it to the next level.</p>
        <div className="overflow-hidden w-full group mask-x-from-99% mask-x-to-100%">
          <div className="flex flex-row animate-scrollSkills w-max gap-x-10 text-white">
            {[...svgsSkills, ...svgsSkills].map((skill, id) => (
                <div
                  key={id}
                  className="size-[135px] max-md:size-[125px] max-sm:size-[100px] flex flex-col justify-center items-center gap-y-6 max-md:gap-y-4 bg-fourth border-2 border-neutral-700 rounded-md"
                >
                  <svg className="w-9 h-9 max-md:w-7 max-md:h-7">
                    <use xlinkHref={`/assets/sprite.svg#${skill.id}`}/>
                  </svg>
                  <p className="small-sm text-small-d max-md:text-small-m">{ skill.name }</p>
                </div>
            ))}
          </div>
        </div>
      </MainContainer>
    </div>
  )
}
