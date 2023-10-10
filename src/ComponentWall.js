import * as React from 'react'
import { SymbolsProvider } from "@symbo.ls/react";

import { Brick, BrickTitle } from './Brick'
import image from './test-img.jpg'

import * as uikit from './uikit'
import * as atoms from '@symbo.ls/atoms'
import svg from './bell.svg'

export default function ComponentWall(props) {
  // console.log("uikit:", uikit)
  const [name, setName] = React.useState('lala')
  
  const nest = {
    Flex: {
      Flex: {
        TimePickerItem_hh: {
          NumberInput: {
            fontSize: '100px',
            onChange: (e) => {
              e.stopPropagation()
              console.log('ONCHANGE')
              setName(e.target.value + 'kiki')
            }
          }
        }
      }
    }
  }
  
  // console.log(Object.keys(uikit).filter(v => !Object.keys(atoms).includes(v)).join('\n'))
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
        <Brick title={"Circle"}>
          <uikit.Circle
            theme={"primary"}
            onClick={(ev) => { console.log("Clicked on the primary Circle"); }} />
        </Brick>

        <Brick title={"Box"}>
          <uikit.Box />
        </Brick>

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

        <Brick title={"ButtonSet"}>
          <uikit.ButtonSet>
            <uikit.SquareButton
              theme={"primary"}
              onClick={(ev) => { console.log("Clicked on SquareButton"); }} />

            <uikit.SquareButton
              theme={"primary"}
              onClick={(ev) => { console.log("Clicked on SquareButton"); }} />
          </uikit.ButtonSet>
        </Brick>

        <Brick title={"CircleButton"}>
          <uikit.CircleButton
            theme={"primary"}
            onClick={(ev) => { console.log("Clicked on CircleButton"); }} />
        </Brick>

        <Brick title={"SquareButton"}>
          <uikit.SquareButton
            theme={"primary"}
            onClick={(ev) => { console.log("Clicked on SquareButton"); }} />
        </Brick>

        {/* <Brick title={"CancelConfirmButtons"}>
          <uikit.CancelConfirmButtons
            theme={"primary"}
            onClick={(ev) => { console.log("Clicked on CancelConfirmButtons"); }} />
        </Brick> */}
        
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

        <Brick title={"CheckIndicator"}>
          <uikit.CheckIndicator theme={"primary"} />
        </Brick>

        <Brick title={"CheckIndicatorWithLabel"}>
          <uikit.CheckIndicatorWithLabel theme={"primary"} />
        </Brick>

        {/* <Brick title={"Checkbox"}>
          <uikit.Checkbox theme={"primary"} />
        </Brick> */}

        <Brick title={"Modal"}>
          <uikit.Modal />
        </Brick>

        <Brick title={"Select"}>
          <uikit.Select />
        </Brick>

        <Brick title={"Avatar"}>
          <uikit.Avatar key={"123"} />
        </Brick>

        <Brick title={"AvatarChooser"}>
          <uikit.AvatarChooser
            options={['Archimedes', 'Thucydides', 'Erathostenes']} />
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
          <uikit.Field tag='div' onChange={e => setName(e.target.value)} logElement={true} />
        </Brick>

        <Brick title={"Input"}>
          <uikit.Input value={name} defaultValue={'yo' + name} onChange={e => setName(e.target.value)} placeholder={"Placeholder text"} />
          <h6>{ name }</h6>
        </Brick>

        <Brick title={"Link"}>
          <uikit.Link href="https://google.com" target="_blank">google.com</uikit.Link>
        </Brick>

        <Brick title={"List"}>
          <uikit.List>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
          </uikit.List>
        </Brick>

        <Brick title={"TimePicker"}>
          <uikit.TimePicker {...nest} onClick={(e, el) => console.log(el)} onChange={e => setName(e.target.value)} logElement={true} />
        </Brick>

        {/* <Brick title={"Search"}>
          <uikit.Search />
        </Brick> */}

        {/* <Brick title={"SearchWithButton"}>
          <uikit.SearchWithButton />
        </Brick> */}

        {/* <Brick title={"SearchWithDropDownButton"}>
          <uikit.SearchWithDropDownButton />
        </Brick> */}
      </div>
    </SymbolsProvider>
  )
}
