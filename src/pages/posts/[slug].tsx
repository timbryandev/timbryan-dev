import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps } from 'next';

import PostHeader from '../../components/PostHeader';
import { Content } from '../../layout/Content';
import { Main } from '../../layout/Main';
import { Meta } from '../../layout/Meta';
import { getAllPosts, getPostBySlug } from '../../utils/content';
import { markdownToHtml } from '../../utils/markdown';

interface IPostUrl extends ParsedUrlQuery {
  slug: string;
}

interface IPostProps {
  content: string;
  credit?: any; // TODO: We should use [string, string]
  description: string;
  image: string;
  posted: string;
  status: string;
  title: string;
  updated: string;
}

const Post = (props: IPostProps): JSX.Element => (
  <Main
    meta={
      <Meta
        title={props.title}
        description={props.description}
        post={{
          image: props.image,
          posted: props.posted,
          status: props.status,
          updated: props.updated,
        }}
      />
    }
  >
    <div className="post">
      <PostHeader
        {...props}
        creditName={props.credit?.[0]}
        creditLink={props.credit?.[1]}
      />

      <Content>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </Content>

      <footer className="post__footer">
        <p>That&apos;s all folks - thanks for reading!</p>
      </footer>
    </div>
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({
  params,
}) => {
  // We know params!.page will always exist
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = getPostBySlug(params!.slug, [
    'content',
    'credit',
    'description',
    'image',
    'posted',
    'slug',
    'status',
    'title',
    'updated',
  ]);
  const content = await markdownToHtml(post.content ?? '');

  return {
    props: {
      content,
      credit: post.credit ?? null,
      description: post.description,
      image: post.image,
      posted: post.posted,
      status: post.status,
      title: post.title,
      updated: post.updated ?? post.posted,
    },
  };
};

export default Post;
