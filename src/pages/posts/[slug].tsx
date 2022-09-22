import { GetStaticPaths, GetStaticProps } from 'next';

import ImageWithCredit from '../../components/ImageWithCredit';
import PublishDate from '../../components/PublishDate';
import { Content } from '../../layout/Content';
import { Main } from '../../layout/Main';
import { Meta } from '../../layout/Meta';
import { getAllPosts, getPostBySlug } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  content: string;
  credit?: any; // TODO: We should use [string, string]
  description: string;
  image: string;
  posted: string;
  status: string;
  title: string;
  updated: string;
};

const Post = (props: IPostProps) => (
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
      <h1 className="post__title">{props.title}</h1>
      <p className="post__date">
        <PublishDate {...props} showUpdated={true} />
      </p>

      <ImageWithCredit
        image={props.image}
        name={props.credit?.[0]}
        link={props.credit?.[1]}
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
  const content = await markdownToHtml(post.content || '');

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
