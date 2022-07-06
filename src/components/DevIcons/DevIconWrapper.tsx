interface IWrapperProps {
  children: React.ReactNode;
  url?: string;
}

const Wrapper = ({ children, url }: IWrapperProps) => {
  const styles =
    'relative dev-icon inline-flex flex-col items-center my-1 mx-4';

  return typeof url === 'string' ? (
    <a className={styles} href={url}>
      {children}
    </a>
  ) : (
    <span className={styles}>{children}</span>
  );
};

export default Wrapper;
