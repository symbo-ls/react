import * as React from 'react'
import { Brick, BrickTitle } from './Brick'
import * as Atoms from './uikit/Atoms'
import image from './test-img.jpg'

import { Button } from './uikit/Button'
import svg from './bell.svg'

export default function ComponentWall(props) {

  return (
    <div>
      <Brick title={"Atoms.Img"}>
        <Atoms.Img
          src={image}
          alt={'Guy with long hair and wine in hand cheering'}
          title={'Cheers!'} />
      </Brick>

      <Brick title={"Button"}>
        <Button icon={svg}>
          Click me!
        </Button>
      </Brick>

    </div>
  )
}
