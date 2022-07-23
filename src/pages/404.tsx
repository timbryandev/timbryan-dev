import Link from 'next/link';

import { Content } from '../components/Content';
import { Main } from '../components/Main';
import { Meta } from '../layout/Meta';

const confusedJohnGif =
  require('../../public/assets/images/confused-john.gif').default;

const TITLE = '404 - Page not Found';
const DESC = 'The page you were looking for could not be found';

const Custom404 = () => (
  <Main meta={<Meta title={TITLE} description={DESC} />}>
    <Content>
      <div className="flex flex-col items-center">
        <h2>ERROR: {TITLE}</h2>
        <h3>{DESC}</h3>
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

export default Custom404;
