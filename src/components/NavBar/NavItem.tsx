import Link from 'next/link';

export interface NavItemProps {
  link: string;
  text?: string;
  newWindow?: boolean;
}

export default function NavItem({
  link,
  text = link,
  newWindow = false,
}: NavItemProps): JSX.Element {
  return (
    <li className="navbar__item">
      <Link href={link} passHref>
        {newWindow ? (
          <a className="link" target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        ) : (
          <a className="link">{text}</a>
        )}
      </Link>
    </li>
  );
}
