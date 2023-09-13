import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';

const TimJS = (): JSX.Element => (
  <Main meta={<Meta title="tim.js" description="The Input Manipulator dot JavaScript" />}>
    <iframe style={{ position: 'absolute', top: 0, left: 0 }} width="100vw" height="100vh" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=L035Qqb0qBsd1K4q&autoplay=1" frameBorder="0" allow="autoplay" allowFullscreen></iframe>
  </Main>
);

export default TimJS;
