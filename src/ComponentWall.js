import * as React from 'react'
import { SymbolsProvider } from "@symbo.ls/react";

import { Brick, BrickTitle } from './Brick'
import image from './test-img.jpg'

import * as uikit from './uikit'
import svg from './bell.svg'

export default function ComponentWall(props) {
  console.log("uikit:", uikit)
  console.log(Object.keys(uikit).join('\n'))
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
        <Brick title={"Button (primary theme)"}>
          <uikit.Button
            theme={"primary"}
            text={"Click me"}
            onClick={(ev) => { console.log("Clicked on the primary button"); }} />
        </Brick>

        <Brick title={"Button (secondary theme)"}>
          <uikit.Button
            theme={"secondary"}
            text={"Click me"}
            onClick={(ev) => { console.log("Clicked on the secondary button"); }} />
        </Brick>

        <Brick title={"CircleButton"}>
          <uikit.CircleButton
            text={"!!"}
            theme={"primary"}
            onClick={(ev) => { console.log("Clicked on CircleButton"); }} />
        </Brick>

        <Brick title={"SquareButton"}>
          <uikit.SquareButton
            text={"??"}
            theme={"primary"}
            onClick={(ev) => { console.log("Clicked on SquareButton"); }} />
        </Brick>

        <Brick title={"CancelConfirmButtons"}>
          <uikit.CancelConfirmButtons
            theme={"primary"}
            onClick={(ev) => { console.log("Clicked on CancelConfirmButtons"); }} />
        </Brick>
        
        <Brick title={"Img"}>
          <uikit.Img
            src={image}
            alt={'Cat with no signal above its head'}
            title={'No signal!'} />
        </Brick>

        <Brick title={"Picture"}>
          <uikit.Picture
            src={image}
            alt={'Cat with no signal above its head'}
            title={'No signal!'} />
        </Brick>

        <Brick title={"BalanceCard"}>
          <uikit.BalanceCard
            color={"white"} />
        </Brick>

        <Brick title={"CheckIndicator"}>
          <uikit.CheckIndicator theme={"primary"} />
        </Brick>

        <Brick title={"CheckBox"}>
          <uikit.CheckBox theme={"primary"} />
        </Brick>

        <Brick title={"Modal"}>
          <uikit.Modal />
        </Brick>

        <Brick title={"ProgressCircle"}>
          <uikit.ProgressCircle />
        </Brick>

        <Brick title={"ProgressLine"}>
          <uikit.ProgressLine />
        </Brick>

        <Brick title={"Select"}>
          <uikit.Select />
        </Brick>

        <Brick title={"Avatar"}>
          <uikit.Avatar key={"123"} />
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

        <Brick title={"Input"}>
          <uikit.Input placeholder={"Placeholder text"} />
        </Brick>

        <Brick title={"Link"}>
          <uikit.Link href="https://google.com" target="_blank">google.com</uikit.Link>
        </Brick>

        <Brick title={"RouteLink"}>
          <uikit.RouteLink href="https://xkcd.com">xkcd.com</uikit.RouteLink>
        </Brick>

        <Brick title={"RouterLink"}>
          <uikit.RouterLink href="https://bing.com">bing.com</uikit.RouterLink>
        </Brick>

        <Brick title={"List"}>
          <uikit.List>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
          </uikit.List>
        </Brick>

        <Brick title={"TimePicker"}>
          <uikit.TimePicker />
        </Brick>

        <Brick title={"Search"}>
          <uikit.Search />
        </Brick>

        <Brick title={"SearchWithButton"}>
          <uikit.SearchWithButton />
        </Brick>

        <Brick title={"SearchWithDropDownButton"}>
          <uikit.SearchWithDropDownButton />
        </Brick>
      </div>
    </SymbolsProvider>
  )
}
