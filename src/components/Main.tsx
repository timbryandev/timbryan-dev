import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';
import { Navbar } from './Navbar';
import ThemeToggle from './Theme/ThemeToggle';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 dark:text-gray-300 p-0 md:p-5 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-60 backdrop-blur-lg drop-shadow-lg">
    {props.meta}

    <div className="max-w-screen-lg mx-auto p-5">
      <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6 z-10">
        <ThemeToggle />
      </div>

      <header className="text-center pt-16 pb-8 m-auto max-w-md">
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

      <Navbar>
        <li className="mr-6">
          <Link href="/">
            <a>Posts</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about/">
            <a>About</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/contact/">
            <a>Contact</a>
          </Link>
        </li>
      </Navbar>

      <hr />

      <main className="text-base py-5">{props.children}</main>

      <hr />

      <footer className="py-8 text-sm">
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
          <Link href={AppConfig.url}>{AppConfig.author}</Link>. Base project
          from the awesome <span role="img" aria-label="Love"></span>{' '}
          <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a> ♥
        </p>
      </footer>
    </div>
  </div>
);

export { Main };
