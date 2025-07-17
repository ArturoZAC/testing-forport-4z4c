import { BodyContact } from "@/components/contact/BodyContact";
import { Title } from "@/components/ui";
import { getTranslations } from "next-intl/server";

export const Contact = async() => {
  const t = await getTranslations('Titles');
  return (
    <section id="contact" className="flex flex-col gap-y-20 max-md:gap-y-10 mt-60 px-6 scroll-mt-24">
      <Title title={`${t('contact')}`}/>
      <BodyContact />
    </section>
  );
};
