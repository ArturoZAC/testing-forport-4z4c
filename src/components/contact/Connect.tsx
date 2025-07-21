'use client';

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useInView } from 'react-intersection-observer'

const connectSvgs = [
  {
    id: "contactTwitter",
    name: "Twitter",
    href: "https://x.com/Zacariasyat1",
  },
  {
    id: "contactFacebook",
    name: "Facebook",
    href: "https://www.facebook.com/Zacarias.AA",
  },
  {
    id: "contactLinkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arturo-zacarias-araujo-cunya-6a7288264/",
  },
  {
    id: "contactInstagram",
    name: "Instagram",
    href: "https://www.instagram.com/4z4csxz/",
  }
]

export const Connect = () => {

  const t = useTranslations('Contact');

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <div ref={ref} className={`w-full max-w-1/2 max-md:max-w-full bg-fourth rounded-2xl h-[inherit] ${inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
      <div className="py-10 px-8 flex flex-col gap-y-10 body-small-r text-body-small-d max-md:text-body-small-m">
        <p className="subtitle1-b text-subtitle-1-d max-md:text-subtitle-1-m  bg-gradient-to-l from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">{t('connectTitle')}</p>
        <p>{t('connectDescription')}</p>
        <div className="grid grid-cols-2 max-sm:gap-x-10 gap-y-10 max-sm:gap-y-5 justify-items-center items-center w-full max-middle:w-full">
        {
          connectSvgs.map((svg, id) => (
            <Link href={svg.href} key={id} target="_blank">
              <div className="flex flex-col items-center gap-y-3">
                <svg className="w-9 h-9 max-md:w-7 max-md:h-7">
                  <use xlinkHref={`/assets/sprite.svg#${svg.id}`} />
                </svg>
                <p className="small-r text-small-d max-md:text-small-m">{svg.name}</p>
              </div>
            </Link>
          ))
        }
        </div>
      </div>
    </div>

  );
};
