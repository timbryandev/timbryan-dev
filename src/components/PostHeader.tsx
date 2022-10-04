import PublishDate from './PublishDate';

export interface PostHeaderProps {
  creditLink?: string;
  creditName?: string;
  image: string;
  posted: string;
  title: string;
  updated: string;
}

const Credit = ({ name, link }: { name?: string; link?: string }) => {
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
}: PostHeaderProps) {
  return (
    <div
      className="post__header"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="post__header__content">
        <p className="post__credit">
          <span>
            <Credit name={creditName} link={creditLink} />
          </span>

          <span>(Hover to reveal)</span>
        </p>
        <h1 className="post__title">{title}</h1>
        <p className="post__date">
          <PublishDate posted={posted} updated={updated} showUpdated={true} />
        </p>
      </div>
    </div>
  );
}

export default PostHeader;
