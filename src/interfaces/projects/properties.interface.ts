type linkProps = { name: string; url: string; nameSvg: string };

export interface Properties {
  isOdd?: boolean;
  title: string;
  imageFront: string;
  links: linkProps[];
  description: string;
  stack: string[];
  video?: string;
}
