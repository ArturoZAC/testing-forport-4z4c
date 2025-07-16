'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';
import { Link } from "@/i18n/navigation";
import { MainContainer } from "../responsive/MainContainer";
// import { links } from "@/data/linksData";
import { HamburgerButton } from "../hero";
import { GetLinksWithTranslate } from "@/data/linksData";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('/');
  const [isMenuPressed, setIsMenuPressed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [language, setLanguage] = useState<'ENG' | 'ESP'>('ENG');
  const [isOpen, setIsOpen] = useState(false);

  const links = GetLinksWithTranslate();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lang: 'ENG' | 'ESP') => {
    setLanguage(lang);
    setIsOpen(false);
  
    // Determina el prefijo de idioma
    const langPrefix = lang === 'ENG' ? '/en' : '/es';
  
    // Quita el prefijo de idioma actual si existe
    const pathWithoutLang = pathname.replace(/^\/(en|es)/, '');
  
    // Navega a la nueva ruta con el idioma seleccionado
    router.push(`${langPrefix}${pathWithoutLang}`);
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

  const toggleMenu = () => {
    if (isMenuPressed) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        setIsMenuPressed(false);
      }, 500);
    } else {
      setIsMenuPressed(true);
    }
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="fixed top-[10px] left-0 w-full z-50 flex flex-col items-center justify-center px-6">
      <MainContainer className="h-[60px] max-md:h-[50px] rounded-2xl flex px-6 py-4 max-md:px-3 max-md:py-2 justify-between bg-primary border-2 border-neutral-700">
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image src="/navbar/logo-4z4c-white.png" alt="logo" width={75} height={25} className="w-[75px] h-[25px] max-md:w-[60px]" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-[20px]">
          <nav>
            <ul className="flex items-center justify-center small-r text-small-d max-md:text-small-m gap-x-[20px] h-[29px] max-md:hidden">
              {
                links.map((link) => (
                  <li className={`underline-animate ${activeLink === link.path ? 'animate-colorChange active' : ''} flex flex-col items-center justify-center h-[inherit] text-secondary`} key={link.path}>
                    <Link href={link.path} onClick={() => handleLinkClick(link.path)}>
                      {link.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
          <div className="flex gap-x-2">
            <div className="relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer body-small-b text-body-small-d max-md:text-body-small-m flex items-center justify-center p-1 bg-gradient-to-r from-violet-700 to-fuchsia-700 rounded-lg gap-x-2 max-md:gap-x-1.5 text-secondary"
              > 
                {
                 language === 'ENG' 
                  ?<Image src='/navbar/ENG.png' alt='language-icon' width={24} height={24} />
                  :<Image src='/navbar/ESP.png' alt='language-icon' width={24} height={24} /> 
                }
                <p>{language}</p>
              </div>

              {isOpen && (
                <div className="absolute animate__animated animate__fadeIn top-full mt-1 -left-0 max-md:-left-1 bg-primary border border-neutral-700 rounded-lg shadow-lg z-50 min-w-full text-sm text-secondary">
                  {['ENG', 'ESP'].map((lang) => (
                    <div
                      key={lang}
                      onClick={() => handleLanguageChange(lang as 'ENG' | 'ESP')}
                      // onClick={() => {
                      //   setLanguage(lang as 'ENG' | 'ESP');
                      //   setIsOpen(false);
                      // }}
                      className={`min-w-[73px] flex cursor-pointer items-center justify-center px-1 py-2.5 gap-x-2 hover:bg-neutral-800 rounded ${language === lang ? 'bg-gradient-to-r from-violet-700 to-fuchsia-700 font-bold' : ''
                        }`}
                    >
                      <Image src={`/navbar/${lang}.png`} alt='language-icon' width={24} height={24} />
                      <p>{lang}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <HamburgerButton isMenuPressed={isMenuPressed} toggleMenu={toggleMenu} />
            {(isMenuPressed || isClosing) && (
              <div className={`fixed top-0 left-0 w-full h-screen bg-fourth z-50 flex flex-col p-6 gap-6 md:hidden ${isClosing ? 'animate-slide-out-navbar' : 'animate-slide-in-navbar'}`}>
                <div className="flex justify-end">
                  <button
                    className="group w-8 h-8 text-slate-800 bg-gradient-to-r from-violet-700 to-fuchsia-700 text-center items-center justify-center rounded shadow hover:shadow transition flex"
                    aria-pressed={isMenuPressed}
                    onClick={toggleMenu}
                  >
                    <svg
                      className="w-6 h-6 fill-current text-white"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="7" width="16" height="2" rx="1" transform="rotate(45 8 8)" />
                      <rect y="7" width="16" height="2" rx="1" transform="rotate(-45 8 8)" />
                    </svg>
                  </button>
                </div>
                <ul className="flex flex-col justify-center items-center gap-6 mt-4">
                  {links.map((link) => (
                    <li
                      key={link.path}
                      className={`text-secondary body-large text-body-large-m underline-animate ${activeLink === link.path ? 'animate-colorChange active' : ''}`}
                    >
                      <Link href={link.path} onClick={() => {
                        handleLinkClick(link.path);
                        toggleMenu();
                      }}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </MainContainer>
    </div>
  )
};