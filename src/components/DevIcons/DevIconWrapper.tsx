import { ReactNode } from 'react';

import Link from 'next/link';

interface IWrapperProps {
  children: ReactNode | ReactNode[];
  url?: string;
}

const DevIconWrapper = ({ children, url }: IWrapperProps) => {
  return typeof url === 'string' ? (
    <Link href={url}>
      <a className="devicons__wrapper">{children}</a>
    </Link>
  ) : (
    <span className="devicons__wrapper">{children}</span>
  );
};

export default DevIconWrapper;
