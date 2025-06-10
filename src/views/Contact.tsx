import { BodyContact } from "@/components/contact/BodyContact";
import { Title } from "@/components/ui";

export const Contact = () => {
  return (
    <section id="contact" className="flex flex-col gap-y-20 max-md:gap-y-10 mt-60 px-6 scroll-mt-24">
      <Title title="Contact"/>
      <BodyContact />
    </section>
  );
};
