import Image from 'next/image';
import Link from 'next/link';

import confusedJohnGif from '../../public/assets/images/confused-john.gif';
import { Content } from '../layout/Content';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';

const TITLE = '404 - Page not Found';
const DESC = 'The page you were looking for could not be found';

const Custom404 = (): JSX.Element => (
  <Main meta={<Meta title={TITLE} description={DESC} />}>
    <Content>
      <div className="p-error">
        <h2>ERROR: {TITLE}</h2>
        <h3>{DESC}</h3>
        <Image
          src={confusedJohnGif.src}
          alt="funny animation GIF"
          className="p-error__image"
          height={confusedJohnGif.height}
          width={confusedJohnGif.width}
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

export default Custom404;
