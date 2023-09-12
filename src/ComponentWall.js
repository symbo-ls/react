import * as React from 'react'
import { SymbolsProvider } from "@symbo.ls/react";

import { Brick, BrickTitle } from './Brick'
import image from './test-img.jpg'

import * as uikit from './uikit'
import svg from './bell.svg'

export default function ComponentWall(props) {
  return (
    <SymbolsProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        <Brick title={"Img"}>
          <uikit.Img
            src={image}
            alt={'Cat with no signal on its head'}
            title={'No signal!'} />
        </Brick>

        <Brick title={"Avatar"}>
          <uikit.Avatar key={"123"} />
        </Brick>

        <Brick title={"Button"}>
          <uikit.Button
            icon={"arrow"}
            theme={"primary"}
            tag={"button"}
            text={"Click me"}
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

        <Brick title={"AvatarChooser"}>
          <uikit.AvatarChooser
            options={[
              { text: 'Kevin' },
              { text: 'Jay' }
            ]}
            />
        </Brick>


      </div>
    </SymbolsProvider>
  )
}
