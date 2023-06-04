import * as React from 'react'
import { Img } from './uikit/Atoms'
// import { Button } from './uikit/Button'

export default function ComponentWall(props) {

  return (
    <div>
      <Img
        src={'./test-img.jpg'}
        alt={'Guy with long hair and wine in hand cheering'}
        title={'Cheers!'} />
{/*      <Button>
        Click me
      </Button> */}
      {props.text}
    </div>
  )
}
