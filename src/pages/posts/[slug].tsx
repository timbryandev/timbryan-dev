import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { Main } from '../../components/Main';
import PublishDate from '../../components/PublishDate';
import { Content } from '../../content/Content';
import { Meta } from '../../layout/Meta';
import { getAllPosts, getPostBySlug } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  title: string;
  description: string;
  posted: string;
  updated: string;
  status: string;
  image: string;
  content: string;
};

const DisplayPost = (props: IPostProps) => (
  <Main
    meta={
      <Meta
        title={props.title}
        description={props.description}
        post={{
          image: props.image,
          posted: props.posted,
          updated: props.updated,
          status: props.status,
        }}
      />
    }
  >
    <h1 className="text-center font-bold text-3xl text-gray-900 dark:text-gray-300">
      {props.title}
    </h1>
    <div className="text-center text-sm mb-8">
      <PublishDate {...props} showUpdated={true} />
    </div>

    <img src={props.image} className="mx-auto" alt="" />

    <Content>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Content>
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
    'title',
    'description',
    'posted',
    'updated',
    'status',
    'image',
    'content',
    'slug',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      title: post.title,
      description: post.description,
      posted: post.posted,
      updated: post.updated ?? post.posted,
      status: post.status,
      image: post.image,
      content,
    },
  };
};

export default DisplayPost;
