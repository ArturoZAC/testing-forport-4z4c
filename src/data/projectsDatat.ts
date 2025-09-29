import { Properties } from "@/interfaces/projects/properties.interface";

export const projectsData: Properties[] = [
  {
    title: "Authentication App",
    links: [
      {
        name: "Demo",
        nameSvg: "demo",
      },
      {
        name: "Front",
        nameSvg: "github",
      },
      {
        name: "Back",
        nameSvg: "github",
      },
    ],
    description:
      "A full-stack authentication app built with the PERN stack, featuring email verification, secure login, protected routes, profile access, and password recovery. Powered by Express, Prisma, JWT on the backend and React, Vite, Zustand on the frontend.",
    stack: [
      "postgre",
      "express",
      "react",
      "node",
      "jwt",
      "tailwindcss",
      "shadcn",
    ],
    video: "https://www.youtube.com/watch?v=nym0yvPO1Gk&t=222s",
  },
];
