import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';
import { NavBar } from './NavBar/NavBar';
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
        <header className="text-center m-auto mt-8 bg-[#f8f6f5] dark:bg-[#090a0e] rounded-lg p-2 pb-5 cursor-pointer shadow hover:scale-105 transition-all">
          <h1 className="font-semibold text-3xl text-gray-900 dark:text-gray-300">
            {AppConfig.author}
          </h1>
          <div style={{ margin: 'auto', maxWidth: '180px' }}>
            <Image
              src="/assets/images/avatar.jpg"
              className="rounded-full "
              alt="Avatar photo of Tim smiling in a blue polo shirt against a blurred bubble background"
              width="500"
              height="500"
              layout="intrinsic"
            />
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </header>
      </Link>

      <NavBar items={AppConfig.siteLinks} />

      <main className="text-base py-5">{props.children}</main>

      <NavBar items={AppConfig.siteLinks} />

      <footer className="py-8">
        <p className="text-lg">
          <a href="https://ko-fi.com/S6S5EHTC8">Buy Tim a coffee ☕</a>
        </p>
        <p>
          RSS feeds: <Link href="/rss/feed.xml">XML</Link>,{' '}
          <Link href="/rss/feed.json">JSON</Link>
        </p>
        <p>
          Site background image by:{' '}
          <a href="https://unsplash.com/@juanjodev02?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            @juanjodev02
          </a>
        </p>
        <p className="text-center ">
          © Copyright {new Date().getFullYear()}{' '}
          <Link href={AppConfig.url}>{AppConfig.author}</Link>.<br />
          Base project from the awesome{' '}
          <span role="img" aria-label="Love"></span>{' '}
          <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a> ❤️
        </p>
      </footer>
    </div>
  </div>
);

export { Main };
