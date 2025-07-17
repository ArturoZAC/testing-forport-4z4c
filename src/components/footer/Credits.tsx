import { getTranslations } from "next-intl/server";

export const Credits = async() => {

  const t = await getTranslations('Footer');

  return (

    <div className="mt-10 mb-8 max-md:mb-6 flex flex-col gap-y-6">
      <span className="border-2 border-primary animate-scaleTitle rounded-full"></span>
      <div className="flex flex-row max-xs:flex-col max-xs:gap-y-4 justify-between tiny-sm text-tiny-d max-md:text-tiny-m">
        <p>{t('creditsPrimary')}</p>
        <p>{t('creditsSecondary')}</p>
      </div>
    </div>
  );
};
