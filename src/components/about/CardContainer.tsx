import { getCardData } from "@/data/getCardData";
import { Card } from "./Card"


export const CardContainer = async() => {

  const cardData = await getCardData();

  return (
    <div className="w-full max-w-1/2 max-md:max-w-full h-[600px] grid grid-cols-2 gap-x-8 content-between max-lg:grid-cols-1 max-lg:grid-rows-4 max-lg:gap-y-4">
      {cardData.map((card, index) => (
        <Card key={index} lead={card.lead} descripcion={card.descripcion} name={ card.name } />
      ))}
    </div>
  )
}
