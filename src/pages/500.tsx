import Image from 'next/image';
import Link from 'next/link';

import itCrowedFireGif from '../../public/assets/images/it-crowed-fire.gif';
import { Content } from '../layout/Content';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';

const TITLE = '500 - Server-side error occurred';
const DESC = 'The server is having problems carrying out your request';
console.log({ itCrowedFireGif });
const Custom500 = (): JSX.Element => (
  <Main meta={<Meta title={TITLE} description={DESC} />}>
    <Content>
      <div className="p-error">
        <h2>ERROR: {TITLE}</h2>
        <h3>{DESC}</h3>
        <Image
          src={itCrowedFireGif.src}
          alt="funny animation GIF"
          className="p-error__image"
          height={itCrowedFireGif.height}
          width={itCrowedFireGif.width}
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
