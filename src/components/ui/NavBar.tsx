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
      <MainContainer className="h-[60px] rounded-full flex px-[25px] py-[15px] justify-between bg-[#0A0A0A] border border-neutral-600">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/navbar/logo-4z4c-white.png" alt="logo" width={75} height={30} style={{ minWidth: '75px' }} />
          </Link>
        </div>
        {/* Navbar */}
        <div className="flex items-center justify-center gap-x-[20px]">
          <nav>
            <ul className="flex items-center justify-center text-small-r-d gap-x-[20px] h-[29px]">
              {
                links.map((link) => (
                  <li className={` ${activeLink === link.path ? 'text-third border-b-2 border-third animate-navli' : ''} flex flex-col items-center justify-center h-[inherit]`} key={link.path}><Link href="/" className={`${activeLink === link.path ? '' : ''} `} onClick={() => handleLinkClick(link.path)}>{link.name}</Link></li>
                ))
              }
            </ul>
          </nav>
          <div className="text-body-small-b-d flex items-center justify-center p-[5px] bg-third-back rounded-lg gap-x-[5px]">
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
