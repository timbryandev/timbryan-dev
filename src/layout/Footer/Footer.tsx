import Link from 'next/link';
import {
  BiCode,
  BiCodeCurly,
  BiCoffeeTogo,
  BiSitemap,
  BiGitBranch,
} from 'react-icons/bi';
import {
  FaGithub,
  FaLinkedin,
  FaNpm,
  FaGithubAlt,
  FaGamepad,
  FaBlog,
  FaJsfiddle,
} from 'react-icons/fa';
import { MdRssFeed } from 'react-icons/md';
import { TbQrcode, TbSocial } from 'react-icons/tb';

import { AppConfig } from '../../AppConfig';

const Footer = (): JSX.Element => (
  <footer className="footer">
    <section className="footer__links footer__links--column">
      <header>
        <h2>
          <TbSocial /> Socials
        </h2>
      </header>
      <ul className="list">
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
            <FaGithub /> Repo
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
    </section>

    <section className="footer__links footer__links--column">
      <header>
        <h2>
          <MdRssFeed /> Feeds
        </h2>
      </header>
      <ul className="list">
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

    <section className="footer__links footer__links--row">
      <header>
        <h2>
          <BiGitBranch /> Notable Work
        </h2>
      </header>
      <ul className="list">
        <li className="list__item list__item--star">
          <p>
            TimBryan.dev
            <br />
            <a className="link" href="https://timbryan.dev">
              <FaBlog /> Blog
            </a>
            <br />
            <a
              className="link"
              href="https://github.com/timbryandev/timbryan-dev"
            >
              <FaGithubAlt /> Repo
            </a>
          </p>
        </li>
        <li className="list__item list__item--star">
          <p>
            Get-Five
            <br />
            <a className="link" href="https://get-five.timbryan.dev">
              <FaGamepad /> Game
            </a>
            <br />
            <a className="link" href="https://github.com/timbryandev/get-five">
              <FaGithubAlt /> Repo
            </a>
          </p>
        </li>
        <li className="list__item list__item--star">
          <p>
            uuidV4
            <br />
            <a
              className="link"
              href="https://www.npmjs.com/package/@timbryandev/uuidv4"
            >
              <FaNpm /> Package
            </a>
          </p>
          <p>
            <a className="link" href="https://github.com/timbryandev/uuidv4">
              <FaGithubAlt /> Repo
            </a>
          </p>
        </li>
        <li className="list__item list__item--star">
          <p>
            Q-Arr codes
            <br />
            <a className="link" href="https://q-arrr.timbryan.dev">
              <TbQrcode /> App
            </a>
          </p>
          <p>
            <a className="link" href="https://github.com/timbryandev/q-arr">
              <FaGithubAlt /> Repo
            </a>
          </p>
        </li>
        <li className="list__item list__item--star">
          <p>
            LinkedIn Header Generator
            <br />
            <a
              className="link"
              href="https://jsfiddle.net/timbryandev/sugcknam/"
            >
              <FaJsfiddle /> Fiddle
            </a>
          </p>
        </li>
        <li className="list__item list__item--star">
          <p>
            SCORM 1.2 Template
            <br />
            <a
              className="link"
              href="https://github.com/timbryandev/template-scorm1.2-primer"
            >
              <FaGithubAlt /> Repo
            </a>
          </p>
        </li>
        <li className="list__item list__item--star">
          <p>
            WORT - WORd Transformer
            <br />
            <a className="link" href="https://github.com/timbryandev/wort">
              <FaGithubAlt /> Repo
            </a>
          </p>
        </li>
        <li className="list__item list__item--star">
          <p>
            7zip Batch Zip
            <br />
            <a
              className="link"
              href="https://github.com/timbryandev/7zip-batch-zip"
            >
              <FaGithubAlt /> Repo
            </a>
          </p>
        </li>
      </ul>
    </section>

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
