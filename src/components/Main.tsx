import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { BiCoffeeTogo } from 'react-icons/bi';
import { MdRssFeed } from 'react-icons/md';

import { AppConfig } from '../utils/AppConfig';
import { NavBar } from './NavBar';
import ThemeToggle from './Theme/ThemeToggle';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased bg-opacity-70 bg-white dark:bg-black dark:bg-opacity-60 dark:text-gray-300 md:p-5 p-0 text-gray-700 w-full">
    {props.meta}

    <div className="max-w-screen-lg mx-auto p-5">
      <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6 z-10">
        <ThemeToggle />
      </div>

      <Link href="/">
        <header className="hero">
          <h1 className="hero__title">{AppConfig.author}</h1>

          <Image
            src="/assets/images/avatar.jpg"
            className="hero__image"
            alt="Avatar photo of Tim smiling in a blue polo shirt against a blurred bubble background"
            width="180"
            height="180"
            layout="intrinsic"
          />

          <div className="hero__text">{AppConfig.description}</div>
        </header>
      </Link>

      <NavBar items={AppConfig.siteLinks} />

      <main className="text-base py-5">{props.children}</main>

      <NavBar items={AppConfig.siteLinks} />

      <footer className="py-8">
        <p className="text-lg">
          <a href="https://ko-fi.com/S6S5EHTC8">
            <BiCoffeeTogo /> Buy Tim a coffee
          </a>
        </p>
        <p>
          <MdRssFeed /> RSS feeds: <Link href="/rss/feed.xml">XML</Link>,{' '}
          <Link href="/rss/feed.json">JSON</Link>
        </p>
        <p>
          Site background image by:{' '}
          <a href="https://unsplash.com/@juanjodev02?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            @juanjodev02
          </a>
        </p>
        <p>&nbsp;</p>
        <p className="text-center ">
          © Copyright {new Date().getFullYear()}{' '}
          <Link href={AppConfig.url}>{AppConfig.author}</Link>.
        </p>
        <p>
          Base project from the awesome{' '}
          <span role="img" aria-label="Love"></span>{' '}
          <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a> ❤️
        </p>
      </footer>
    </div>
  </div>
);

export { Main };
