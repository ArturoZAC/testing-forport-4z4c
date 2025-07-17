import { svgsSkills } from "@/data";
import { MainContainer } from "../responsive/MainContainer"
import { getTranslations } from "next-intl/server";

export const BodySkills = async() => {
  const t = await getTranslations('Skills');
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <MainContainer className="flex flex-col gap-y-14">
        <p className="text-pretty body-small-sm text-body-small-d max-md:text-body-small-m">{t('description')}</p>
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
