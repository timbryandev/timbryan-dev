/* eslint-disable */
import { Main } from '../layout/Main'
import { Meta } from '../layout/Meta'

import { useEffect } from 'react'
export default function redirect() {
  useEffect(() => {
    window.location.assign('https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=mB3rfPyLMtsaDkng&autoplay=1')
  })
  return (
    <Main
      meta={
        <Meta title='tim.js' description='"The Input Manipulator" uses AI to transmorm your input into anything you can think of. Ask it to arrange windows on your desktop, produce lofi poly beats to work to and even calculate your self-assessment tax returns! Use the following link to grab the NPM package and get started :D' />
      }
    >
      <p>Loading dynamic content...</p>
    </Main>
  )
}