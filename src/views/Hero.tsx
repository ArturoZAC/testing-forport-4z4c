import { BodyHero } from "@/components/hero/BodyHero";
import { NavBar } from "@/components/ui";

export const Hero = () => {
  return (
    <section id="home" className="px-6">
      <NavBar />
      <BodyHero />
    </section> 
  )
};
