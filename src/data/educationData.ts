
import { getTranslations } from "next-intl/server";

export const getLeftCards = async() => {
  const t = await getTranslations('Education');

  return [
    {
      title: `${t('title1left')}`,
      date: `${t('date1left')}`,
      description:`${t('description1left')}`,
    },
    {
      title: `${t('title2left')}`,
      date: `${t('date2left')}`,
      description:`${t('description2left')}`,
    },
    {
      title: `${t('title3left')}`,
      date: `${t('date3left')}`,
      description:`${t('description3left')}`,
      isLast: true,
    },
  ];
};

export const getRightCards = async() => {
  const t = await getTranslations('Education');

  return [
    {
      title: `${t('title1right')}`,
      date: `${t('date1right')}`,
      description:`${t('description1right')}`,
    },
    {
      title: `${t('title2right')}`,
      date: `${t('date2right')}`,
      description:`${t('description2right')}`,
    },
  ];
};

export const getFullCards = async() => {
  const t = await getTranslations('Education');

  return [
    {
      title: `${t('title1left')}`,
      date: `${t('date1left')}`,
      description:`${t('description1left')}`,
      isLeft: true,
    },
    {
      title: `${t('title1right')}`,
      date: `${t('date1right')}`,
      description:`${t('description1right')}`,
    },
    {
      title: `${t('title2left')}`,
      date: `${t('date2left')}`,
      description:`${t('description2left')}`,
      isLeft: true,
    },
    {
      title: `${t('title2right')}`,
      date: `${t('date2right')}`,
      description:`${t('description2right')}`,
    },
    {
      title: `${t('title3left')}`,
      date: `${t('date3left')}`,
      description:`${t('description3left')}`,
      isLeft: true,
    },
  ];
};