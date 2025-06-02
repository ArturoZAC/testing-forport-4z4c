import { Card } from "./Card"

const cardData = [
  {
    lead: "Problem Solver",
    descripcion: "Approaching complex coding challenges with analytical thinking and persistence.",
  },
  {
    lead: "Continuous Learner",
    descripcion: "Passionate about staying updated with the latest technologies and best practices.",
  },
  {
    lead: "Creative Thinker",
    descripcion: "Finding innovative solutions by thinking outside the box.",
  },
  {
    lead: "Academic Focus",
    descripcion: "Currently pursuing programming courses at Devtalles.",
  },
];

export const CardContainer = () => {
  return (
    <div className="w-full max-w-1/2 h-[600px] grid grid-cols-2 gap-x-8 content-between max-lg:grid-cols-1 max-lg:grid-rows-4 max-lg:gap-y-4">
      {cardData.map((card, index) => (
        <Card key={index} lead={card.lead} descripcion={card.descripcion} />
      ))}
    </div>
  )
}
