import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/avatar.jpeg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';
import flag from '@/assets/images/flag.svg';
export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  flag?: any;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://ismanolgarcia.com',
  author: {
    avatar,
    name: 'Ismanol García',
    headline: ' Ingeniero en Software',
    username: 'ismanolgarcia',
    flag,
  },
  seo: {
    title: 'Ismanol García - Ingeniero en Software',
    description: 'Ingeniero en Software apasionado por el desarrollo web y la creación de interfaces funcionales y atractivas',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@ismanolgarcia'
    },
    robots: 'noindex, nofollow',
  }
};

export const SKILLS: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'Astro',
  'Tailwind CSS',
  'Node.js',
  'SQL',
  'Version Control (Git)',
  'Linux',
  'Figma'
];