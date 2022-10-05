import PublishDate from './PublishDate';
import { useRef } from 'react';
import useEventListener from '../hooks/useEventListener';

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
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const revealOnHover = ({ type }: MouseEvent | TouchEvent): void => {
    console.log('revealOHover');
    const content = contentRef.current;

    if (content === null) return;

    // Interaction starting
    if (['mouseover', 'touchstart'].includes(type)) {
      content.style.opacity = '0';
      return;
    }

    // Interaction complete
    content.style.opacity = '';
  };

  useEventListener('mouseover', revealOnHover, wrapperRef);
  useEventListener('mouseleave', revealOnHover, wrapperRef);
  useEventListener('touchstart', revealOnHover, wrapperRef);
  useEventListener('touchend', revealOnHover, wrapperRef);

  return (
    <div
      ref={wrapperRef}
      className="post__header noselect"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="post__header__content" ref={contentRef}>
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
