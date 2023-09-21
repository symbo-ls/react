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

        <Brick title={"ButtonTemplate1"}>
          <uikit.ButtonTemplate1
            text={"Click me"}
            onClick={(ev) => { console.log("Clicked on ButtonTemplate1"); }} />
        </Brick>

        <Brick title={"ButtonTemplate2"}>
          <uikit.ButtonTemplate2
            text={"Click me"}
            onClick={(ev) => { console.log("Clicked on ButtonTemplate2"); }} />
        </Brick>

        <Brick title={"ButtonTemplate3"}>
          <uikit.ButtonTemplate3
            text={"Click me"}
            onClick={(ev) => { console.log("Clicked on ButtonTemplate3"); }} />
        </Brick>

        <Brick title={"ButtonTemplate4"}>
          <uikit.ButtonTemplate4
            text={"Click me"}
            onClick={(ev) => { console.log("Clicked on ButtonTemplate4"); }} />
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

        <Brick title={"Card"}>
          <uikit.Card 
            color={"white"} />
        </Brick>

        <Brick title={"ConvertCard"}>
          <uikit.ConvertCard theme={"primary"} />
        </Brick>

        <Brick title={"ConvertBoard"}>
          <uikit.ConvertBoard theme={"primary"} />
        </Brick>

        <Brick title={"ChatUser"}>
          <uikit.ChatUser theme={"secondary"} />
        </Brick>

        <Brick title={"ChatUserWithButtonSet"}>
          <uikit.ChatUserWithButtonSet theme={"primary"} />
        </Brick>

        <Brick title={"ChatUserWithNotification"}>
          <uikit.ChatUserWithNotification theme={"secondary"} />
        </Brick>

        <Brick title={"ChatUserWithUploadedFile"}>
          <uikit.ChatUserWithUploadedFile theme={"white"} />
        </Brick>

        <Brick title={"CheckIndicator"}>
          <uikit.CheckIndicator theme={"primary"} />
        </Brick>

        <Brick title={"CheckIconWithBorder"}>
          <uikit.CheckIconWithBorder theme={"primary"} />
        </Brick>

        <Brick title={"CheckBox"}>
          <uikit.CheckBox theme={"primary"} />
        </Brick>

        <Brick title={"CheckBoxWithImgWithLabel"}>
          <uikit.CheckBoxWithImgWithLabel src={image} logElement />
        </Brick>

        <Brick title={"CheckBoxWithSet"}>
          <uikit.CheckBoxWithSet src={image} color={"white"} />
        </Brick>

        <Brick title={"Modal"}>
          <uikit.Modal />
        </Brick>

        <Brick title={"MessageModal"}>
          <uikit.MessageModal color={"white"} />
        </Brick>

        <Brick title={"ChangePasswordModal"}>
          <uikit.ChangePasswordModal color={"white"} />
        </Brick>

        <Brick title={"ResetCompleteModal"}>
          <uikit.ResetCompleteModal />
        </Brick>

        <Brick title={"VerificationCodeModal"}>
          <uikit.VerificationCodeModal />
        </Brick>

        <Brick title={"ProgressCircle"}>
          <uikit.ProgressCircle />
        </Brick>

        <Brick title={"ProgressLine"}>
          <uikit.ProgressLine />
        </Brick>

        <Brick title={"ProgressLineWithUnitValue"}>
          <uikit.ProgressLineWithUnitValue />
        </Brick>

        <Brick title={"Select"}>
          <uikit.Select />
        </Brick>

        <Brick title={"Avatar"}>
          <uikit.Avatar key={"123"} />
        </Brick>

        <Brick title={"AvatarChooser"}>
          <uikit.AvatarChooser
            options={[
              { text: 'Kevin' },
              { text: 'Jay' }
            ]}
            />
        </Brick>

        <Brick title={"BalancesIndicator"}>
          <uikit.BalancesIndicator />
        </Brick>

        <Brick title={"DateIndicator"}>
          <uikit.DateIndicator />
        </Brick>

        <Brick title={"NotificationAlert"}>
          <uikit.NotificationAlert text={"Prepeare for landing!"} />
        </Brick>

        <Brick title={"OrLines"}>
          <uikit.OrLines />
        </Brick>

        <Brick title={"CheckMark"}>
          <uikit.CheckMark/>
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

        <Brick title={"CodeField"}>
          <uikit.CodeField />
        </Brick>

        <Brick title={"CommonField"}>
          <uikit.CommonField />
        </Brick>

        <Brick title={"CustomizedField"}>
          <uikit.CustomizedField />
        </Brick>

        <Brick title={"FieldWithAllSet"}>
          <uikit.FieldWithAllSet />
        </Brick>

        <Brick title={"Input"}>
          <uikit.Input placeholder={"Placeholder text"} />
        </Brick>

        <Brick title={"IndicatorDot"}>
          <uikit.IndicatorDot />
        </Brick>

        <Brick title={"Link"}>
          <uikit.Link href="https://google.com">google.com</uikit.Link>
        </Brick>

        <Brick title={"RouteLink"}>
          <uikit.RouteLink href="https://xkcd.com">xkcd.com</uikit.RouteLink>
        </Brick>

        <Brick title={"RouterLink"}>
          <uikit.RouterLink href="https://bing.com">bing.com</uikit.RouterLink>
        </Brick>

        <Brick title={"List"}>
          <uikit.List />
        </Brick>

        <Brick title={"GroupList"}>
          <uikit.GroupList />
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
