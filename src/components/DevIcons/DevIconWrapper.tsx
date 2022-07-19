import Link from 'next/link';

interface IWrapperProps {
  children: React.ReactNode | React.ReactNode[];
  url?: string;
}

const DevIconWrapper = ({ children, url }: IWrapperProps) => {
  const styles =
    'relative dev-icon inline-flex flex-col items-center my-1 mx-4';

  return typeof url === 'string' ? (
    <Link className={styles} href={url}>
      <>{children}</>
    </Link>
  ) : (
    <span className={styles}>{children}</span>
  );
};

export default DevIconWrapper;
