/* eslint-disable */
import { Main } from '../layout/Main'
import { Meta } from '../layout/Meta'

const TimJS = (): JSX.Element => (
  <Main
    meta={
      <Meta title='tim.js' description='The Input Manipulator dot JavaScript' />
    }
  >
    <iframe
      width='100%'
      height='100%'
      style={{ minHeight: '50vh', minWidth: '50vw' }}
      src='https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=L035Qqb0qBsd1K4q&autoplay=1'
      title='YouTube video player'
      frameborder='0'
      allow='autoplay'
      allowfullscreen=''
    ></iframe>
  </Main>
)

export default TimJS
