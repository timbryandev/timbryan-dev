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
      width='560'
      height='315'
      src='https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=mB3rfPyLMtsaDkng&autoplay=1'
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
      style={{ height: '50vh', width: '100%' }}
    ></iframe>
  </Main>
)

export default TimJS
