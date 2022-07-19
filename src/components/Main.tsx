import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';
import { Navbar } from './Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 dark:text-gray-300 px-3 md:px-0">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
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

      <main className="text-xl py-5">{props.children}</main>

      <hr />

      <footer className="py-8 text-sm">
        <p>
          RSS feeds: <Link href="/rss/feed.xml">XML</Link>,{' '}
          <Link href="/rss/feed.json">JSON</Link>
        </p>
        <p className="text-center ">
          © Copyright {new Date().getFullYear()}{' '}
          <Link href={AppConfig.url}>{AppConfig.author}</Link>. Project base
          from the awesome <span role="img" aria-label="Love"></span>{' '}
          <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a> ♥
        </p>
      </footer>
    </div>
  </div>
);

export { Main };
