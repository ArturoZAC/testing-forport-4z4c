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

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[10px]">
      <MainContainer className="h-[60px] rounded-full flex px-[25px] py-[15px] justify-between bg-primary border-3 border-border">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/navbar/logo-4z4c-white.png" alt="logo" width={75} height={25} style={{ minWidth: '75px', height: '25px' }}/>
          </Link>
        </div>
        {/* Navbar */}
        <div className="flex items-center justify-center gap-x-[20px]">
          <nav>
            <ul className="flex items-center justify-center text-small-r-d gap-x-[20px] h-[29px]">
              {
                // border-b-2 border-third
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
          <div className="text-body-small-b-d flex items-center justify-center p-[5px] bg-gradient-to-r from-violet-700 to-fuchsia-700 rounded-lg gap-x-[10px] text-secondary">
            <div>
              <Image src='/navbar/united-states.png' alt='unated-states' width={25} height={25} />
            </div>
            <p>ENG</p>
          </div>
        </div>
      </MainContainer>
    </div>
  )
};
