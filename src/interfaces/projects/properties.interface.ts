type linkProps = { name: string; nameSvg: string };

export interface Properties {
  isOdd?: boolean;
  title: string;
  links: linkProps[];
  description: string;
  stack: string[];
  video?: string;
}
