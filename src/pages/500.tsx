import Link from 'next/link';

import { Content } from '../layout/Content';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';

const itCrowedFireGif =
  require('../../public/assets/images/it-crowed-fire.gif').default;

const TITLE = '500 - Server-side error occurred';
const DESC = 'The server is having problems carrying out your request';

const Custom500 = () => (
  <Main meta={<Meta title={TITLE} description={DESC} />}>
    <Content>
      <div className="p-error">
        <h2>ERROR: {TITLE}</h2>
        <h3>{DESC}</h3>
        <img
          src={itCrowedFireGif.src}
          alt="funny animation GIF"
          className="p-error__image"
        />
        <p>
          But don&apos;t worry, we&apos;ve got our best people working to
          resolve this for you 😬
        </p>
        <p>
          Might be safest to head back <Link href="/">home</Link> and try again?
        </p>
      </div>
    </Content>
  </Main>
);

export default Custom500;
