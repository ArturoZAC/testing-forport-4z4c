import { BodyContact } from "@/components/contact/BodyContact";
import { Title } from "@/components/ui";

export const Contact = () => {
  return (
    <section className="flex flex-col gap-y-20 max-md:gap-y-10 mt-60 mb-100 px-6">
      <Title title="Contact"/>
      <BodyContact />
    </section>
  );
};
