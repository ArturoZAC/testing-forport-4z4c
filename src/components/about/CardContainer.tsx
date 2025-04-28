import { Card } from "./Card"

export const CardContainer = () => {
  return (
    <div className="w-full h-[600px] grid grid-cols-2 gap-x-10 content-between">
      <Card lead="Problem Solver" descripcion="Approaching complex coding challenges with analytical thinking and persistence."/>
      <Card lead="Continuous Learner" descripcion="Passionate about staying updated with the latest technologies and best practices."/>
      <Card lead="Creative Thinker" descripcion="Finding innovative solutions by thinking outside the box."/>
      <Card lead="Academic Focus" descripcion="Pursuing a Master's Degree in IT Architecture in the 42 network."/>
    </div>
  )
}
