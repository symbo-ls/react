import * as React from 'react'
import { SymbolsProvider } from "@symbo.ls/react";

import { Brick, BrickTitle } from './Brick'
import image from './test-img.jpg'

import Img from './uikit/Img'
import Button from './uikit/Button'
import Input from './uikit/Input'
import svg from './bell.svg'

export default function ComponentWall(props) {

  return (
    <SymbolsProvider>
      <div>
        <Brick title={"Atoms.Img"}>
          <Img
            src={image}
            alt={'Guy with long hair and wine in hand cheering'}
            title={'Cheers!'} />
        </Brick>

        <Brick title={"Button"}>
          <Button
            icon={"arrow"}
            theme={"primary"}
            tag={"button"}
            text={"Click me"}
            logElement={true}
            onClick={(ev) => { console.log("aaaaaaa"); }} />
        </Brick>

        <Brick title={"Input"}>
          <Input />
        </Brick>
      </div>
    </SymbolsProvider>
  )
}
