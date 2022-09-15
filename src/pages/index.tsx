import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../components/BlogGallery';
import { IPaginationProps } from '../components/Pagination';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { getPublishedPosts } from '../utils/Content';

const Index = (props: IBlogGalleryProps) => (
  <Main meta={<Meta title="Posts" description={AppConfig.description} />}>
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getPublishedPosts(['title', 'posted', 'slug']);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2'; // TODO pagination needs to be smarter than this
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
