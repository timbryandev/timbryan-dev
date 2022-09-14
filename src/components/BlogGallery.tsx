import Link from 'next/link';

import { PostItems } from '../utils/Content';
import { Pagination, IPaginationProps } from './Pagination';
import PublishDate from './PublishDate';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <p>If I have anything of interest to say, you&apos;ll find it here:</p>
    <ul className="card__wrapper">
      {props.posts.map((post) => (
        <li key={post.slug} className="card">
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a className="link">
              <h2>{post.title}</h2>
              <div className="card__date">
                <PublishDate
                  posted={post.posted}
                  updated={post.updated}
                  showUpdated={false}
                />
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
