import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Footer from '../layout/Footer';
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

      <Footer />
    </div>
  </div>
);

export { Main };
