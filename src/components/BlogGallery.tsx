import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { PostItems } from '../utils/Content';
import { Pagination, IPaginationProps } from './Pagination';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <p>If I have anything of interest to say, you&apos;ll find it here:</p>
    <ul>
      {props.posts.map((post) => (
        <li
          key={post.slug}
          className="mb-6 flex justify-between flex-col md:flex-row md:items-baseline"
        >
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a className="flex-1">
              <h2 className="mb-0 text-inherit dark:text-inherit">
                {post.title}
              </h2>
              <div className="text-right justify-self-end whitespace-nowrap pl-2">
                {format(new Date(post.date), 'LLL d, yyyy')}
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
