import { useTranslations } from "next-intl";
// import { getTranslations } from "next-intl/server";


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

// export const getLinksWithTranslateServer = async() => {
//   const t = await getTranslations('NavBar');

//   return [
//     { name: `${t('home')}`, path: '#home' },
//     { name: `${t('about')}`, path: '#about' },
//     { name: `${t('education')}`, path: '#education' },
//     { name: `${t('skills')}`, path: '#skills' },
//     { name: `${t('projects')}`, path: '#projects' },
//     { name: `${t('contact')}`, path: '#contact' },
//   ]
// };
