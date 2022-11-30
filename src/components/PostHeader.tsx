import PublishDate from './PublishDate';
import Image from 'next/image';
export interface PostHeaderProps {
  creditLink?: string;
  creditName?: string;
  image: string;
  posted: string;
  title: string;
  updated: string;
}

const Credit = ({
  name,
  link,
}: {
  name?: string;
  link?: string;
}): JSX.Element => {
  if (name === undefined) {
    return <></>;
  }

  return (
    <>
      Cover image by{' '}
      {typeof link === 'string' ? (
        <a href={link} className="link">
          {name}
        </a>
      ) : (
        name
      )}
    </>
  );
};

function PostHeader({
  creditLink,
  creditName,
  image,
  posted,
  title,
  updated,
}: PostHeaderProps): JSX.Element {
  function openInNewWindow(): void {
    window.open(image, '_blank')?.focus();
  }

  return (
    <header className="post__header">
      <h1 className="post__title">{title}</h1>
      <p className="post__date">
        <PublishDate posted={posted} updated={updated} showUpdated={true} />
      </p>
      <div className="post__image">
        <Image
          src={image}
          layout="fill"
          className={'image'}
          alt=""
          onClick={openInNewWindow}
        />
      </div>
      <p className="post__credit">
        <span>
          <Credit name={creditName} link={creditLink} />
        </span>
      </p>
    </header>
  );
}

export default PostHeader;
