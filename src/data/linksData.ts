import { useTranslations } from "next-intl";


export const GetLinksWithTranslate = () => {
  const t = useTranslations('NavBar');

  return [
    { name: `${t('home')}`, path: '#home' },
    { name: `${t('about')}`, path: '#about' },
    { name: `${t('education')}`, path: '#education' },
    { name: `${t('skills')}`, path: '#skills' },
    { name: `${t('projects')}`, path: '#projects' },
    { name: `${t('contact')}`, path: '#contact' },
  ]
};
