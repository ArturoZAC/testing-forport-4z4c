import { BodyContact } from "@/components/contact/BodyContact";
import { Title } from "@/components/ui";

export const Contact = () => {
  return (
    <section className="flex flex-col gap-y-20 mt-60">
      <Title title="Contact"/>
      <BodyContact />
    </section>
  );
};
