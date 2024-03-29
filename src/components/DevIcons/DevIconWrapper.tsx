import { ReactNode } from 'react';

import Link from 'next/link';

interface IWrapperProps {
  children: ReactNode | ReactNode[];
  url?: string;
}

const DevIconWrapper = ({ children, url }: IWrapperProps): JSX.Element => {
  return typeof url === 'string' ? (
    <Link href={url}>
      <a className="devicons__wrapper link">{children}</a>
    </Link>
  ) : (
    <span className="devicons__wrapper">{children}</span>
  );
};

export default DevIconWrapper;
