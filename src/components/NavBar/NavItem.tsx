import React from 'react';

import Link from 'next/link';

export interface NavItemProps {
  link: string;
  text?: string;
  newWindow?: boolean;
}

export const NavItem = ({
  link,
  text = link,
  newWindow = false,
}: NavItemProps) => (
  <li className="mr-6">
    <Link href={link} passHref>
      {newWindow ? (
        <a target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        <a>{text}</a>
      )}
    </Link>
  </li>
);
