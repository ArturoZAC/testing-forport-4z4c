import { Properties } from "@/interfaces/projects/properties.interface";
import { getTranslations } from "next-intl/server";

export const getProjectsData = async (): Promise<Properties[]> => {
  const t = await getTranslations("Projects");

  return [
    {
      title: "Authentication App",
      links: [
        {
          name: "Demo",
          nameSvg: "demo",
          url: "https://auth-app-4z4c.netlify.app/",
        },
        {
          name: "Front",
          nameSvg: "github",
          url: "https://github.com/ArturoZAC/frontend-authentication-app",
        },
        {
          name: "Back",
          nameSvg: "github",
          url: "https://github.com/ArturoZAC/backend-authentication-app",
        },
      ],
      imageFront: "/projects/auth-app-4z4c.png",
      description: `${t("description01")}`,
      stack: [
        "postgre",
        "express",
        "react",
        "node",
        "jwt",
        "tailwindcss",
        "shadcn",
      ],
      video: "https://www.youtube.com/watch?v=Vc6SHPve-gM",
    },

    {
      title: "My Personal Portfolio",
      links: [
        {
          name: "Demo",
          nameSvg: "demo",
          url: "https://4z4c-port.vercel.app",
        },
        {
          name: "Code",
          nameSvg: "github",
          url: "https://github.com/ArturoZAC/testing-forport-4z4c",
        },
      ],
      imageFront: "/projects/portfolio-4z4c.png",
      description: `${t("description02")}`,
      stack: ["nextjs", "react", "tailwindcss"],
    },

    {
      title: "Landing Page",
      links: [
        {
          name: "Demo",
          nameSvg: "demo",
          url: "https://tailwindcss-landing-4z4c.netlify.app",
        },
        {
          name: "Code",
          nameSvg: "github",
          url: "https://github.com/ArturoZAC/tailwindcss-landingpage-4z4c",
        },
      ],
      imageFront: "/projects/landing-4z4c.png",
      description: `${t("description03")}`,
      stack: ["react", "tailwindcss"],
    },

    {
      title: "Social Media",
      links: [
        {
          name: "Demo",
          nameSvg: "demo",
          url: "https://social-dashboard-azac.netlify.app",
        },
        {
          name: "Code",
          nameSvg: "github",
          url: "https://github.com/ArturoZAC/SocialMedia",
        },
      ],
      imageFront: "/projects/social-4z4c.png",
      description: `${t("description04")}`,
      stack: ["react", "tailwindcss"],
    },
  ];
};
