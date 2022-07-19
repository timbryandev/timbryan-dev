import Link from 'next/link';

interface IWrapperProps {
  children: React.ReactNode | React.ReactNode[];
  url?: string;
}

const DevIconWrapper = ({ children, url }: IWrapperProps) => {
  const styles = 'relative dev-icon inline-flex flex-col items-center m-4  ';

  return typeof url === 'string' ? (
    <Link href={url}>
      <a className={styles}>{children}</a>
    </Link>
  ) : (
    <span className={styles}>{children}</span>
  );
};

export default DevIconWrapper;
