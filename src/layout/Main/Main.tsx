import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { NavBar } from '../../components/NavBar';
import ThemeToggle from '../../components/Theme/ThemeToggle';
import { AppConfig } from '../../utils/AppConfig';
import Footer from '../Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="l-main">
    {props.meta}

    <div className="l-main__toggle-theme">
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

    <main>{props.children}</main>

    <Footer />
  </div>
);

export { Main };
