'use client';

import { GetLinksWithTranslate } from "@/data/linksData";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export const InfoAdd = () => {

  const [activeLink, setActiveLink] = useState('/');


  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id && activeLink !== `#${id}`) {
              setActiveLink(`#${id}`);
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeLink]);

  const t = useTranslations('Titles');
  const linksFooter = GetLinksWithTranslate();

  return (
    <div className="flex flex-row justify-around items-start w-1/2 pt-7 h-auto
      max-md:justify-between max-lg:justify-normal max-lg:px-7 max-lg:w-full max-lg:max-w-full max-lg:gap-80 max-md:gap-x-0 max-md:px-0
    ">
      <div className="flex flex-col gap-y-5">
        <p className="body-large-b text-body-large-d max-md:text-body-large-m">Links</p>
        <ul className="flex flex-col gap-y-5 small-sm text-small-d max-md:text-small-m">
          {
            linksFooter?.map( link => (
              <li className={`flex flex-col items-start justify-center h-[inherit] text-primary hover:text-secondary transition-colors duration-300`} key={link.path}>
              <Link href={link.path} onClick={() => handleLinkClick(link.path)}>
                {link.name}
              </Link>
            </li>
            ))
          }
        </ul>
      </div>
      <div className="flex flex-col gap-y-5 small-sm text-small-d max-md:text-small-m">
        <p className="body-large-b text-body-large-d max-md:text-body-large-m">{t('contact')}</p>
        <p>arturoyz2105@gmail.com</p>
        <p>Lima, Perú </p> 
      </div>
    </div>
  )
};
