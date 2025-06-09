'use client';

import Link from "next/link";
import { MainContainer } from "../responsive/MainContainer";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Me',
    path: '/about',
  },
  {
    name: 'Skills',
    path: '/skills',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Education',
    path: '/education',
  },
  {
    name: 'Contact',
    path: '/contact',
  }
]

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const [isMenuPressed, setIsMenuPressed] = useState(false);

  const toggleMenu = () => {
    setIsMenuPressed((prev) => !prev);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[10px]">
      <MainContainer className="h-[60px] max-md:h-[50px] rounded-[20px] flex px-6 py-4 max-md:px-3 max-md:py-2 justify-between bg-primary border-2 border-neutral-700">
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
                    <Link href="/" onClick={() => handleLinkClick(link.path)}>
                      {link.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
          <div>
            <div className="body-small-b text-body-small-d max-md:text-body-small-m flex items-center justify-center p-1 bg-gradient-to-r from-violet-700 to-fuchsia-700 rounded-lg gap-x-2 max-md:gap-x-1.5 text-secondary">
              <div>
                <Image src='/navbar/united-states.png' alt='unated-states' width={25} height={25} />
              </div>
              <p>ENG</p>
            </div>
            <button
              className="group inline-flex w-12 h-12 text-slate-800 bg-white text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
              aria-pressed={isMenuPressed}
              onClick={toggleMenu}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current pointer-events-none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
                  y="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]"
                  y="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
              </svg>
            </button>



          </div>
        </div>
      </MainContainer>
    </div>
  )
};
