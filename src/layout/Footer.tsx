import Link from 'next/link';
import { BiCoffeeTogo } from 'react-icons/bi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdRssFeed } from 'react-icons/md';

import { AppConfig } from '../utils/AppConfig';

const Footer = () => (
  <footer className="py-8">
    <p className="text-lg">
      <a
        href="https://ko-fi.com/S6S5EHTC8"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiCoffeeTogo /> Buy Tim a coffee
      </a>{' '}
      <a
        href="https://github.com/timbryandev/"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> GitHub
      </a>{' '}
      <a
        href="https://www.linkedin.com/in/timbryandev/'"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin /> LinkedIn
      </a>
    </p>
    <p>
      <MdRssFeed /> RSS feeds: <Link href="/rss/feed.xml">XML</Link>,{' '}
      <Link href="/rss/feed.json">JSON</Link>
    </p>
    <p>&nbsp;</p>
    <p className="text-center ">
      © Copyright {new Date().getFullYear()}{' '}
      <Link href={AppConfig.url}>{AppConfig.author}</Link>.
    </p>
    <p>
      Base project from the awesome <span role="img" aria-label="Love"></span>{' '}
      <a className="link" href="https://creativedesignsguru.com">
        CreativeDesignsGuru
      </a>{' '}
      ❤️
    </p>
  </footer>
);

export default Footer;
