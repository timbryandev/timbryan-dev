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
} from 'react-icons/fa';
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
    <section className="footer__links">
      <ul className="list">
        <h3>
          <BiGitBranch /> Notable Work
        </h3>
        <li className="list__item list__item--star">
          <a
            className="link"
            href="https://github.com/timbryandev/timbryan-dev"
          >
            <FaGithubAlt /> TimBryan.dev
          </a>
        </li>
        <li className="list__item list__item--star">
          <p>
            <a className="link" href="https://get-five.timbryan.dev">
              <FaGamepad /> Get-Five
            </a>
          </p>
          <p>
            <a className="link" href="https://github.com/timbryandev/get-five">
              <FaGithubAlt /> Get-Five
            </a>
          </p>
        </li>
        <li className="list__item list__item--star">
          <p>
            <a
              className="link"
              href="https://www.npmjs.com/package/@timbryandev/uuidv4"
            >
              <FaNpm /> uuidV4
            </a>
          </p>
          <p>
            <a className="link" href="https://github.com/timbryandev/uuidv4">
              <FaGithubAlt /> uuidV4
            </a>
          </p>
        </li>
      </ul>
      <ul className="list">
        <h3 className="u-hide-on-mobile" style={{ opacity: 0 }}>
          <BiGitBranch /> Notable Work
        </h3>
        <li className="list__item list__item--star">
          <p>
            <a
              className="link"
              href="https://github.com/timbryandev/template-scorm1.2-primer"
            >
              <FaGithubAlt /> SCORM 1.2 Template
            </a>
          </p>
        </li>
        <li className="list__item list__item--star">
          <p>
            <a className="link" href="https://github.com/timbryandev/wort">
              <FaGithubAlt /> WORT - WORd Transformer
            </a>
          </p>
        </li>
        <li className="list__item list__item--star">
          <p>
            <a
              className="link"
              href="https://github.com/timbryandev/7zip-batch-zip"
            >
              <FaGithubAlt /> 7zip Batch Zip
            </a>
          </p>
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
