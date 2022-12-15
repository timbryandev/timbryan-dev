import Link from 'next/link';
import { AppConfig } from '../AppConfig';
import type { PostItem } from '../utils/content';
import type { IPaginationProps } from './Pagination';
import { Pagination } from './Pagination';
import PublishDate from './PublishDate';

export interface IBlogGalleryProps {
  posts: PostItem[];
  pagination: IPaginationProps;
}

const BlogGallery = (props: IBlogGalleryProps): JSX.Element => (
  <>
    <p>{AppConfig.blogIntro ?? 'Recent posts:'}</p>

    <ul className="card-listing">
      {props.posts.map((post) => (
        <li key={post.slug} className="card">
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a className="card__wrapper">
              {typeof post.image === 'string' && (
                <div
                  className="card__image"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
              )}
              <section className="card__content">
                <h2 className="card__title">{post.title}</h2>
                <blockquote className="card__description">
                  {post.description}
                </blockquote>
                <div className="card__date">
                  <PublishDate
                    posted={post.posted}
                    updated={post.updated}
                    showUpdated={false}
                  />
                </div>
              </section>
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
