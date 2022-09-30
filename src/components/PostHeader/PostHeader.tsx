import PublishDate from '../PublishDate';

export interface PostHeaderProps {
  creditLink?: string;
  creditName?: string;
  image: string;
  posted: string;
  title: string;
  updated: string;
}

const Credit = ({ name, link }: { name?: string; link?: string }) => {
  if (!name) {
    return <p></p>;
  }

  return (
    <p className="post-header__credit">
      Cover image by{' '}
      {link ? (
        <a href={link} className="link">
          {name}
        </a>
      ) : (
        name
      )}
    </p>
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
    <div className="post-header" style={{ backgroundImage: `url('${image}')` }}>
      <div className="post-header__content">
        <Credit name={creditName} link={creditLink} />
        <h1 className="post-header__title">{title}</h1>
        <p className="post-header__date">
          <PublishDate posted={posted} updated={updated} showUpdated={true} />
        </p>
      </div>
    </div>
  );
}

export default PostHeader;
