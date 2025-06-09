'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { MainContainer } from "../responsive/MainContainer";
import { links } from "@/data/linksData";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const [isMenuPressed, setIsMenuPressed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
          <div className="flex gap-x-2">
            <div className="body-small-b text-body-small-d max-md:text-body-small-m flex items-center justify-center p-1 bg-gradient-to-r from-violet-700 to-fuchsia-700 rounded-lg gap-x-2 max-md:gap-x-1.5 text-secondary">
              <div>
                <Image src='/navbar/united-states.png' alt='unated-states' width={24} height={24} />
              </div>
              <p>ENG</p>
            </div>
            <button
              className="group inline-flex md:hidden w-8 h-8 text-slate-800 bg-gradient-to-r from-violet-700 to-fuchsia-700 text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
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
                  className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg] text-white!"
                  y="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45 text-white!"
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                ></rect>
                <rect
                  className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg] text-white!"
                  y="7"
                  width="9"
                  height="2"
                  rx="1"
                ></rect>
              </svg>
            </button>
            {(isMenuPressed || isClosing) && (
              <div className={`fixed top-0 left-0 w-full h-screen bg-fourth z-50 flex flex-col p-6 gap-6 border-r-2 border-neutral-700 md:hidden ${isClosing ? 'animate-slide-out-navbar' : 'animate-slide-in-navbar'}`}>
                {/* Botón para cerrar */}
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
                      {/* Esto puede ser una "X" si quieres en vez de hamburguesa */}
                      <rect y="7" width="16" height="2" rx="1" transform="rotate(45 8 8)" />
                      <rect y="7" width="16" height="2" rx="1" transform="rotate(-45 8 8)" />
                    </svg>
                  </button>
                </div>

                {/* Links */}
                <ul className="flex flex-col justify-center items-center gap-6 mt-4">
                  {links.map((link) => (
                    <li
                      key={link.path}
                      className={`text-secondary body-large text-body-large-m underline-animate ${activeLink === link.path ? 'animate-colorChange active' : ''}`}
                    >
                      <Link href="/" onClick={() => {
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
