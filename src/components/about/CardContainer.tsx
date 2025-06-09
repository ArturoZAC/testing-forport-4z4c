import { Card } from "./Card"

const cardData = [
  {
    name: 'aboutSolver',
    lead: "Problem Solver",
    descripcion: "Approaching complex coding challenges with analytical thinking and persistence.",
  },
  {
    name: 'aboutBook',
    lead: "Continuous Learner",
    descripcion: "Passionate about staying updated with the latest technologies and best practices.",
  },
  {
    name: 'aboutThink',
    lead: "Creative Thinker",
    descripcion: "Finding innovative solutions by thinking outside the box.",
  },
  {
    name: 'aboutCap',
    lead: "Academic Focus",
    descripcion: "Currently pursuing programming courses at Devtalles.",
  },
];

export const CardContainer = () => {
  return (
    <div className="w-full max-w-1/2 max-md:max-w-full h-[600px] grid grid-cols-2 gap-x-8 content-between max-lg:grid-cols-1 max-lg:grid-rows-4 max-lg:gap-y-4">
      {cardData.map((card, index) => (
        <Card key={index} lead={card.lead} descripcion={card.descripcion} name={ card.name } />
      ))}
    </div>
  )
}
