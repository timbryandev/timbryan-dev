import Link from 'next/link';
import { BiCode, BiCodeCurly, BiCoffeeTogo, BiSitemap } from 'react-icons/bi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdRssFeed } from 'react-icons/md';
import { TbSocial } from 'react-icons/tb';

import { AppConfig } from '../../AppConfig';

const Footer = (): JSX.Element => (
  <footer className="footer">
    <section className="footer__links">
      <ul className="list">
        <h3>
          <TbSocial /> Socials
        </h3>
        <li className="list__item">
          <a
            href="https://ko-fi.com/S6S5EHTC8"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiCoffeeTogo /> Buy Tim a coffee
          </a>
        </li>
        <li className="list__item">
          <a
            href="https://github.com/timbryandev/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </li>
        <li className="list__item">
          <a
            href="https://www.linkedin.com/in/timbryandev/'"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </li>
      </ul>
      <ul className="list">
        <h3>
          <MdRssFeed /> Feeds
        </h3>
        <li className="list__item">
          <Link href="/sitemap.xml">
            <a className="link">
              <BiSitemap /> Sitemap
            </a>
          </Link>
        </li>
        <li className="list__item">
          <Link href="/rss/feed.xml">
            <a className="link">
              <BiCode /> RSS <small>(XML)</small>
            </a>
          </Link>
        </li>
        <li className="list__item">
          <Link href="/rss/feed.json">
            <a className="link">
              <BiCodeCurly /> RSS <small>(JSON)</small>
            </a>
          </Link>
        </li>
      </ul>
    </section>
    <p>&nbsp;</p>
    <p className="footer__copyright">
      © Copyright {new Date().getFullYear()}{' '}
      <Link href={AppConfig.url}>{AppConfig.author}</Link>.
      <br />
      Base project from the awesome <span
        role="img"
        aria-label="Love"
      ></span>{' '}
      <a className="link" href="https://creativedesignsguru.com">
        CreativeDesignsGuru
      </a>{' '}
      ❤️
    </p>
  </footer>
);

export default Footer;
