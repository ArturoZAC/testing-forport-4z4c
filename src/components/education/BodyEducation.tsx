import { MainContainer } from "../responsive/MainContainer"
import { CardFull, Certifications, SideLeft, SideMiddle, SideRight } from "."
import { cardFullData, leftCards, rightCards } from "@/data"


export const BodyEducation = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-y-20 max-md:gap-y-10">
      {/* <MainContainer className="flex justify-center items-stretch h-auto">
        <div className="w-1/2 flex flex-col justify-center items-center h-full max-md:hidden">
          {
            leftCards.map((card, _ ) => (
              <SideLeft key={ _ + Math.random()} title={card.title} date={card.date} description={card.description} isLast={card.isLast}/>
            ))
          }
        </div>
        <SideMiddle />
        <div className="w-1/2 flex flex-col justify-center items-center h-full max-md:hidden">
          {
            rightCards.map((card, _ ) => (
              <SideRight key={ _ + Math.random()} title={card.title} date={card.date} description={card.description}/>
            ))
          }
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-y-10 md:hidden">
          {
            cardFullData.map((item, index) => (
              <CardFull
                key={index}
                isLeft={item.isLeft}
                title={item.title}
                date={item.date}
                description={item.description}
              />
            ))
          }
        </div>
      </MainContainer> */}
      <Certifications />
    </div>
  )
}
