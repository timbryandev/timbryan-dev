import { GetStaticProps } from 'next';

import { AppConfig } from '../AppConfig';
import { BlogGallery, IBlogGalleryProps } from '../components/BlogGallery';
import { IPaginationProps } from '../components/Pagination/Pagination';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';
import { getPublishedPosts } from '../utils/content';

const Index = (props: IBlogGalleryProps): JSX.Element => (
  <Main meta={<Meta title="Posts" description={AppConfig.description} />}>
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getPublishedPosts(['title', 'posted', 'slug']);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
