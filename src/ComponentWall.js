import * as React from 'react'
import { SymbolsProvider } from "@symbo.ls/react";

import { Brick, BrickTitle } from './Brick'
import image from './test-img.jpg'

import * as uikit from './uikit'
import svg from './bell.svg'

export default function ComponentWall(props) {
  return (
    <SymbolsProvider>
      <div>
        <Brick title={"Img"}>
          <uikit.Img
            src={image}
            alt={'Guy with long hair and wine in hand cheering'}
            title={'Cheers!'} />
        </Brick>

        <Brick title={"Button"}>
          <uikit.Button
            icon={"arrow"}
            theme={"primary"}
            tag={"button"}
            text={"Click me"}
            logElement={true}
            onClick={(ev) => { console.log("aaaaaaa"); }} />
        </Brick>

        <Brick title={"Input"}>
          <uikit.Input placeholder={"Placeholder text"} />
        </Brick>

        <Brick title={"Card"}>
          <uikit.Card 
            logElement={true}
            color="white" />
        </Brick>

        <Brick title={"Avatar"}>
          <uikit.Avatar key={"123"} />
        </Brick>

        {/*<Brick title={"AvatarChooser"}>
          <uikit.AvatarChooser
            logElement={true}
            options={[
              { text: 'Kevin' },
              { text: 'Jay' }
            ]}
            />
        </Brick> */}


      </div>
    </SymbolsProvider>
  )
}
