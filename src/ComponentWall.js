import * as React from 'react'
import { SymbolsProvider } from "@symbo.ls/react";

import { Brick, BrickTitle } from './Brick'
import image from './test-img.jpg'

import * as uikit from './uikit'
import svg from './bell.svg'

export default function ComponentWall(props) {
  console.log("uikit:", uikit)
  return (
    <SymbolsProvider>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
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
            color={"white"} />
        </Brick>

        <Brick title={"Modal"}>
          <uikit.Modal />
        </Brick>

        <Brick title={"MessageModal"}>
          <uikit.MessageModal color={"white"} />
        </Brick>

        <Brick title={"AvatarChooser"}>
          <uikit.AvatarChooser
            options={[
              { text: 'Kevin' },
              { text: 'Jay' }
            ]}
            />
        </Brick>

        <Brick title={"Label"}>
          <uikit.Label />
        </Brick>

        <Brick title={"Dialog"}>
          <uikit.Dialog>
            Yes. If you change your mind and no longer wish to keep your iPhone,
            you have the option to return it to us. The returned iPhone must be
            in good condition and in the original packaging, which contains all
            accessories, manuals and instructions. Returns are subject to Apples
            Sales and Refunds Policy.
          </uikit.Dialog>
        </Brick>

        <Brick title={"DialogFooter"}>
          <uikit.DialogFooter>Hello friends</uikit.DialogFooter>
        </Brick>

        <Brick title={"DropdownList"}>
          <uikit.DropdownList color={"black"}>
            <li>Ichi</li>
            <li>Nii</li>
            <li>San</li>
          </uikit.DropdownList>
        </Brick>

        <Brick title={"Pills"}>
          <uikit.Pills qty={10} />
        </Brick>

        <Brick title={"Field"}>
          <uikit.Field />
        </Brick>

        <Brick title={"Notification"}>
          <uikit.Notification />
        </Brick>

        <Brick title={"UploadLabel"}>
          <uikit.UploadLabel />
        </Brick>

        <Brick title={"Tooltip"}>
          <uikit.Tooltip />
        </Brick>

        <Brick title={"TimePicker"}>
          <uikit.TimePicker />
        </Brick>

        <Brick title={"Textarea"}>
          <uikit.Textarea />
        </Brick>

        <Brick title={"TextareaWithTitle"}>
          <uikit.TextareaWithTitle />
        </Brick>

        <Brick title={"Video"}>
          <uikit.Video
            src={"https://www.youtube.com/embed/kJQP7kiw5Fk?si=InIRHN2hiB2cF9jB"}
            title="YouTube video player" />
        </Brick>

        <Brick title={"InfoSet"}>
          <uikit.InfoSet>
            I am an infoset
          </uikit.InfoSet>
        </Brick>

        <Brick title={"Search"}>
          <uikit.Search />
        </Brick>

        {/*<Brick title={"Datepicker"}>
          <uikit.Datepicker />
        </Brick> */}

      </div>
    </SymbolsProvider>
  )
}
