import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { Content } from '../../components/Content';
import ImageWithCredit from '../../components/ImageWithCredit';
import { Main } from '../../components/Main';
import PublishDate from '../../components/PublishDate';
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

const DisplayPost = (props: IPostProps) => (
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
    <h1 className="text-center font-bold text-3xl text-gray-900 dark:text-gray-300">
      {props.title}
    </h1>
    <div className="text-center mb-8 underline">
      <PublishDate {...props} showUpdated={true} />
    </div>

    <ImageWithCredit
      image={props.image}
      name={props.credit?.[0]}
      source={props.credit?.[1]}
    />

    <Content>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Content>

    <p className="pt-8 mt-16 text-center border-dashed border-t-2 font-bold border-gray-700 my-4 dark:border-gray-300">
      That&apos;s all folks - thanks for reading!
    </p>
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

export default DisplayPost;
