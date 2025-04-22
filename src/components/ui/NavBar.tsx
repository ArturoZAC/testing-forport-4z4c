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
      <MainContainer className="h-[60px] rounded-full flex px-[20px] py-[15px] justify-between bg-[#1f1c1c]">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/custom/name.png" alt="logo" width={75} height={30} className="bg-red-500" style={{ minWidth: '75px' }} />
          </Link>
        </div>
        {/* Navbar */}
        <div className="flex items-center justify-center gap-x-[20px]">
          <nav>
            <ul className="flex items-center justify-center text-[14px] gap-x-[25px] h-[29px]">
              {
                links.map((link) => (
                  <li key={link.path}><Link href="/" className={`${activeLink === link.path ? 'bg-[#9F03A7] rounded-lg' : ''} `} onClick={() => handleLinkClick(link.path)}>{link.name}</Link></li>
                ))
              }
            </ul>
          </nav>
          <div className="flex items-center justify-center p-[5px] bg-[#9F03A7] rounded-lg gap-x-[5px]">
            <p className="font-bold">LOG</p>
            <p className="font-bold">ENG</p>
          </div>
        </div>
      </MainContainer>
    </div>
  )
};
