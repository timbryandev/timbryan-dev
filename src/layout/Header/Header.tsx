import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AppConfig } from '../../utils/AppConfig';

function Header() {
  return (
    <Link href="/">
      <header className="header hero hero--gradient">
        <h1 className="hero__title">{AppConfig.siteName}</h1>

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
  );
}

export default Header;
