import { BodyContact } from "@/components/contact/BodyContact";
import { Title } from "@/components/ui";

export const Contact = () => {
  return (
    <section className="flex flex-col gap-y-[65px] mt-30">
      <Title title="Contact"/>
      <BodyContact />
    </section>
  );
};
