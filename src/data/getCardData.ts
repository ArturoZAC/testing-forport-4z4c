import { getTranslations } from "next-intl/server";

export const getCardData = async() => {
  
  const t = await getTranslations('About');

  return [
    {
      name: 'aboutSolver',
      lead: `${t('lead1')}`,
      descripcion: `${t('description1')}`,
    },
    {
      name: 'aboutBook',
      lead: `${t('lead2')}`,
      descripcion: `${t('description2')}`,
    },
    {
      name: 'aboutThink',
      lead: `${t('lead3')}`,
      descripcion: `${t('description3')}`,
    },
    {
      name: 'aboutCap',
      lead: `${t('lead4')}`,
      descripcion: `${t('description4')}`,
    },
  ]
};
