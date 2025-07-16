import { BodyAbout } from "@/components/about";
import { Title } from "@/components/ui"; 
import { getTranslations } from "next-intl/server";

export const About = async() => {

  const t = await getTranslations('Titles');

  return (
    <section id="about" className="flex flex-col gap-y-20 mt-40 mb-40 px-6 scroll-mt-24">
      <Title title={t('about')} />
      <BodyAbout/>
    </section>
  );
};
