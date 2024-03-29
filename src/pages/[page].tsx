import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps } from 'next';

import { AppConfig } from '../AppConfig';
import { BlogGallery, IBlogGalleryProps } from '../components/BlogGallery';
import { IPaginationProps } from '../components/Pagination/Pagination';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';
import { getPublishedPosts } from '../utils/content';
import { convertTo2D } from '../utils/pagination';

interface IPageUrl extends ParsedUrlQuery {
  page: string;
}

const PaginatePosts = (props: IBlogGalleryProps): JSX.Element => (
  <Main meta={<Meta title="Posts" description="View posts from Tim" />}>
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const posts = getPublishedPosts(['slug']);

  const pages = convertTo2D(posts, AppConfig.pagination_size);

  return {
    paths: pages.slice(1).map((_, ind) => ({
      params: {
        // Ind starts from zero so we need to do ind + 1
        // slice(1) removes the first page so we do another ind + 1
        // the first page is implemented in index.tsx
        page: `page${ind + 2}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  IBlogGalleryProps,
  IPageUrl
> = async ({ params }) => {
  const posts = getPublishedPosts([
    'title',
    'posted',
    'slug',
    'image',
    'description',
  ]);

  const pages = convertTo2D(posts, AppConfig.pagination_size);
  // We know params!.page will always exist
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const currentPage = Number(params!.page.replace('page', ''));
  const currentInd = currentPage - 1;

  const pagination: IPaginationProps = {};

  if (currentPage < pages.length) {
    pagination.next = `page${currentPage + 1}`;
  }

  if (currentPage === 2) {
    pagination.previous = '/';
  } else {
    pagination.previous = `page${currentPage - 1}`;
  }

  return {
    props: {
      posts: pages[currentInd],
      pagination,
    },
  };
};

export default PaginatePosts;
