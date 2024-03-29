import Image from 'next/image';
import Link from 'next/link';

import brewteafulGif from '../../public/assets/images/brewteaful.gif';
import { Content } from '../layout/Content';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';

const TITLE = "418 - I'm a teapot";
const DESC = 'I am a tea pot';

const Custom418 = (): JSX.Element => (
  <Main meta={<Meta title={TITLE} description={DESC} />}>
    <Content>
      <div className="p-error">
        <h2>ERROR: {TITLE}</h2>
        <h3>{DESC}</h3>
        <Image
          src={brewteafulGif.src}
          alt="funny animation GIF"
          className="p-error__image"
          height={brewteafulGif.height}
          width={brewteafulGif.width}
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
