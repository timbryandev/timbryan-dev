import Link from 'next/link';

import { Main } from '../components/Main';
import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';

const brewteafulGif =
  require('../../public/assets/images/brewteaful.gif').default;

const TITLE = "418 - I'm a teapot";
const DESC = 'I am a tea pot';

const Custom418 = () => (
  <Main meta={<Meta title={TITLE} description={DESC} />}>
    <Content>
      <div className="flex flex-col items-center">
        <h2>ERROR: {TITLE}</h2>
        <h3>{DESC}</h3>
        <img
          src={brewteafulGif.src}
          alt="funny animation GIF"
          style={{
            width: '100%',
            maxWidth: '300px',
            height: 'auto',
          }}
        />
        <p>What did you expect? 😂</p>
        <p>
          Might be safest to head back <Link href="/">home</Link> and try again?
        </p>
      </div>
    </Content>
  </Main>
);

export default Custom418;
