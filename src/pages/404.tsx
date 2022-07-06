import React from 'react';

import Link from 'next/link';

import { Main } from '../components/Main';
import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';

const confusedJohnGif =
  require('../../public/assets/images/confused-john.gif').default;

const About = () => (
  <Main
    meta={
      <Meta
        title="404 Page not found"
        description="The page you were looking for could not be found"
      />
    }
  >
    <Content>
      <div className="flex flex-col items-center">
        <h2>404 - Page not Found</h2>
        <img
          src={confusedJohnGif.src}
          alt="funny animation GIF"
          style={{
            width: '100%',
            maxWidth: '300px',
            height: 'auto',
          }}
        />
        <p>
          John can&apos;t seem to find what you&apos;re looking for either 😬
        </p>
        <p>
          Might be safest to head back <Link href="/">home</Link> and try again?
        </p>
      </div>
    </Content>
  </Main>
);

export default About;
