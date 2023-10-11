import * as React from 'react'
import { SymbolsProvider } from "@symbo.ls/react";

import { Brick, BrickTitle } from './Brick'
import image from './test-img.jpg'

import * as uikit from './uikit'

export default function ComponentWall(props) {
  // console.log("uikit:", uikit)
  const [name, setName] = React.useState('lala')
  
  const nest = {
    Flex: {
      Flex: {
        TimePickerItem_hh: {
          NumberInput: {
            theme: 'tertiary',
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
    <SymbolsProvider globalTheme="dark">
      <uikit.Grid style={{ padding: '3em' }}  gap="C1" columns="repeat(6, 1fr)">
        <Brick title={"Circle"}>
          <uikit.Circle
            theme={"primary"}
            onClick={(ev) => { console.log("Clicked on the primary Circle"); }} />
        </Brick>

        <Brick title={"Box"}>
          {/* <uikit.Box {...{
            color: 'white',
            round: 'Y',
            boxSize: 'B2',
            border: '1px, white .45, dashed'
          }} /> */}
        </Brick>

        <Brick title={"Icon"}>
          <uikit.Icon name="logo"  />
        </Brick>

        <Brick title={"Button (primary theme)"}>
          <uikit.Button
            icon="logo"
            gap="X"
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
          <uikit.ButtonSet gap="Z">
            <uikit.SquareButton
              theme={"primary"}
              icon={"logo"}
              onClick={(ev) => { console.log("Clicked on SquareButton"); }} />

            <uikit.SquareButton
              theme={"primary"}
              icon={"logo"}
              onClick={(ev) => { console.log("Clicked on SquareButton"); }} />
          </uikit.ButtonSet>
        </Brick>

        <Brick title={"StatusIndicator"}>
          <uikit.StatusIndicator
            theme={"primary"}
            onClick={(ev) => { console.log("Clicked on CircleButton"); }} />
        </Brick>

        <Brick title={"Avatar"}>
          <uikit.Avatar />
        </Brick>

        <Brick title={"AvatarBundle"}>
          <uikit.AvatarBundle options={[{
            src: 'https://avatars.githubusercontent.com/u/263385'
          }, {
            src: 'https://avatars.githubusercontent.com/u/263385'
          }, {
            src: 'https://avatars.githubusercontent.com/u/263385'
          }]}>
          </uikit.AvatarBundle>
        </Brick>

        <Brick title={"AvatarIndicator"}>
          <uikit.AvatarIndicator />
        </Brick>

        <Brick title={"AvatarChooser"}>
          <uikit.AvatarChooser options={[{
            text: 'Kevin'
          }, {
            text: 'John'
          }]} />
        </Brick>

        <Brick title={"TitleParagraph"}>
          <uikit.TitleParagraph />
        </Brick>

        <Brick title={"User"}>
          <uikit.User />
        </Brick>

        <Brick title={"Label"}>
          <uikit.Label />
        </Brick>

        <Brick title={"UserWithLabel"}>
          <uikit.UserWithLabel />
        </Brick>

        <Brick title={"CountIndicator"}>
          <uikit.CountIndicator />
        </Brick>

        <Brick title={"ChatUser"}>
          <uikit.ChatUser />
        </Brick>

        {/* <Brick title={"UserButtonSet"}>
          <uikit.UserButtonSet />
        </Brick> */}

        <Brick title={"UserMessage"}>
          <uikit.UserMessage />
        </Brick>

        <Brick title={"UserWithButton"}>
          <uikit.UserWithButton />
        </Brick>

        <Brick title={"CommonButton"}>
          <uikit.CommonButton />
        </Brick>

        <Brick title={"CancelConfirmButtons"}>
          <uikit.CancelConfirmButtons />
        </Brick>

        <Brick title={"IconCommonButton"}>
          <uikit.IconCommonButton />
        </Brick>

        <Brick title={"IcontextButton"}>
          <uikit.IcontextButton />
        </Brick>

        <Brick title={"Tab"}>
          <uikit.Tab />
        </Brick>

        <Brick title={"IconTab"}>
          <uikit.IconTab />
        </Brick>

        <Brick title={"TitleParagraphWithButton"}>
          <uikit.TitleParagraphWithButton />
        </Brick>

        <Brick title={"SuccessIndicator"}>
          <uikit.SuccessIndicator />
        </Brick>

        <Brick title={"UploadImage"}>
          <uikit.UploadImage />
        </Brick>

        <Brick title={"UploadButtonWithIcon"}>
          <uikit.UploadButtonWithIcon />
        </Brick>

        <Brick title={"UploadButton"}>
          <uikit.UploadButton />
        </Brick>

        <Brick title={"CircleButton"}>
          <uikit.CircleButton
            theme={"primary"}
            onClick={(ev) => { console.log("Clicked on CircleButton"); }} />
        </Brick>

        <Brick title={"SquareButton"}>
          <uikit.SquareButton
            logElement={true}
            icon="logo" 
            Icon={{ name: "logo" }}
            theme={"primary"}
            onClick={(ev) => { console.log("Clicked on SquareButton"); }} />
        </Brick>

        <Brick gridColumnStart="span 3" title={"Modal"}>
          <uikit.Modal />
        </Brick>

        <Brick gridColumnStart="span 3" title={"Message"}>
          <uikit.Message />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadLabel2"}>
          <uikit.UploadLabel2 />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadModal"}>
          <uikit.UploadModal />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadModal3"}>
          <uikit.UploadModal3 />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadLabel"}>
          <uikit.UploadLabel />
        </Brick>

        <Brick gridColumnStart="span 3" title={"CompleteProcess"}>
          <uikit.CompleteProcess />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadModal2"}>
          <uikit.UploadModal2 />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadImage"}>
          <uikit.UploadImage />
        </Brick>

        <Brick gridColumnStart="span 3" title={"DoubleUnitValue"}>
          <uikit.DoubleUnitValue />
        </Brick>

        <Brick gridColumnStart="span 3" title={"ProgressLine"}>
          <uikit.ProgressLine />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadingProcess"}>
          <uikit.UploadingProcess />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UnitValue"}>
          <uikit.UnitValue />
        </Brick>

        <Brick gridColumnStart="span 3" title={"ProgressLineWithUnitValue"}>
          <uikit.ProgressLineWithUnitValue />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadingProcess2"}>
          <uikit.UploadingProcess2 />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadedProcess2"}>
          <uikit.UploadedProcess2 />
        </Brick>

        <Brick gridColumnStart="span 3" title={"ProgressCircleWithSideUnitValue"}>
          <uikit.ProgressCircleWithSideUnitValue />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadingProcess3"}>
          <uikit.UploadingProcess3 />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadedProcess3"}>
          <uikit.UploadedProcess3 />
        </Brick>

        <Brick gridColumnStart="span 3" title={"ProgressCircle"}>
          <uikit.ProgressCircle />
        </Brick>

        <Brick gridColumnStart="span 3" title={"ProgressCircleWithIcon"}>
          <uikit.ProgressCircleWithIcon />
        </Brick>

        <Brick gridColumnStart="span 3" title={"ProgressCircleWithUnitValue"}>
          <uikit.ProgressCircleWithUnitValue />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadingProcess4"}>
          <uikit.UploadingProcess4 />
        </Brick>

        <Brick gridColumnStart="span 3" title={"UploadedProcess4"}>
          <uikit.UploadedProcess4 />
        </Brick>

        <Brick gridColumnStart="span 6" title={"UploadModal4"}>
          <uikit.UploadModal4 />
        </Brick>
        
        <Brick title={"Checkbox"}>
          <uikit.Checkbox  />
        </Brick>
        
        <Brick title={"Radio"}>
          <uikit.Radio />
        </Brick>
        
        <Brick title={"Toggle"}>
          <uikit.Toggle />
        </Brick>
        
        <Brick title={"CheckboxTitleParagraph"}>
          <uikit.CheckboxTitleParagraph />
        </Brick>
        
        <Brick title={"RadioTitleParagraph"}>
          <uikit.RadioTitleParagraph />
        </Brick>
        
        <Brick title={"ToggleTitleParagraph"}>
          <uikit.ToggleTitleParagraph />
        </Brick>
        
        <Brick gridColumnStart="span 3" title={"Field"}>
          <uikit.Field />
        </Brick>
        
        <Brick gridColumnStart="span 3" title={"FieldTemplate"}>
          <uikit.FieldTemplate />
        </Brick>
        
        <Brick gridColumnStart="span 3" title={"CommonField"}>
          <uikit.CommonField />
        </Brick>
        
        <Brick gridColumnStart="span 3" title={"CommonFieldTemplate"}>
          <uikit.CommonFieldTemplate />
        </Brick>
        
        <Brick gridColumnStart="span 3" title={"Textarea"}>
          <uikit.Textarea />
        </Brick>
        
        <Brick gridColumnStart="span 3" title={"TextareaWithButton"}>
          <uikit.TextareaWithButton />
        </Brick>
        
        {/* <Brick title={"NumberField"}>
          <uikit.NumberField />
        </Brick> */}
        
        <Brick title={"ParagraphButton"}>
          <uikit.ParagraphButton />
        </Brick>
        
        {/* <Brick gridColumnStart="span 3" title={"VerificationCode"}>
          <uikit.VerificationCode />
        </Brick> */}
        
        {/* <Brick title={"ResetPassword"}>
          <uikit.ResetPassword />
        </Brick> */}
        
        <Brick gridColumnStart="span 6" title={"ContactForm"}>
          <uikit.ContactForm />
        </Brick>
        
        <Brick gridColumnStart="span 6" title={"SignUp"}>
          <uikit.SignUp />
        </Brick>
        
        <Brick gridColumnStart="span 6" title={"LogIn"}>
          <uikit.LogIn />
        </Brick>
        
        <Brick title={"DoubleHr"}>
          <uikit.DoubleHr />
        </Brick>
        
        <Brick title={"SocialLink"}>
          <uikit.SocialLink />
        </Brick>
        
        {/* <Brick title={"SlideTabs"}>
          <uikit.SlideTabs />
        </Brick> */}
        
        <Brick title={"Search"}>
          <uikit.Search />
        </Brick>
        
        <Brick title={"SearchWithButton"}>
          <uikit.SearchWithButton />
        </Brick>
        
        <Brick title={"DropDownButton"}>
          <uikit.DropDownButton />
        </Brick>
        
        <Brick title={"SearchWithDropDownButton"}>
          <uikit.SearchWithDropDownButton />
        </Brick>
        
        <Brick title={"ListTemplate"}>
          <uikit.ListTemplate />
        </Brick>
        
        <Brick title={"ListWithTitleTemplate"}>
          <uikit.ListWithTitleTemplate />
        </Brick>
        
        {/* <Brick title={"GroupListTemplate"}>
          <uikit.GroupListTemplate />
        </Brick> */}
        
        {/* <Brick title={"GroupListWithSearchTemplate"}>
          <uikit.GroupListWithSearchTemplate />
        </Brick> */}
        
        <Brick title={"CheckIndicator"}>
          <uikit.CheckIndicator />
        </Brick>
        
        {/* <Brick title={"CheckIndicatorWithLabel"}>
          <uikit.CheckIndicatorWithLabel />
        </Brick> */}
        
        <Brick title={"CheckStep"}>
          <uikit.CheckStep />
        </Brick>
        
        <Brick gridColumnStart="span 6" title={"CheckSteps"}>
          <uikit.CheckSteps />
        </Brick>
        
        <Brick title={"RadioIndicator"}>
          <uikit.RadioIndicator />
        </Brick>
        
        <Brick title={"RadioIndicatorWithLabel"}>
          <uikit.RadioIndicatorWithLabel />
        </Brick>
        
        <Brick title={"RadioStep"}>
          <uikit.RadioStep />
        </Brick>
        
        <Brick gridColumnStart="span 6" title={"RadioSteps"}>
          <uikit.RadioSteps />
        </Brick>
        
        <Brick title={"LineSteps"}>
          <uikit.LineSteps />
        </Brick>
        
        <Brick title={"LineStepsWithTitleParagraph"}>
          <uikit.LineStepsWithTitleParagraph />
        </Brick>
        
        <Brick title={"UnitValueWithLabel"}>
          <uikit.UnitValueWithLabel />
        </Brick>
        
        <Brick gridColumnStart="span 6" title={"StepCard"}>
          <uikit.StepCard />
        </Brick>
        
        <Brick gridColumnStart="span 6" title={"BalanceCard"}>
          <uikit.BalanceCard />
        </Brick>
        
        <Brick gridColumnStart="span 6" title={"ConvertCard"}>
          <uikit.ConvertCard />
        </Brick>
        
        <Brick gridColumnStart="span 6" title={"CurrencyConvert"}>
          <uikit.CurrencyConvert />
        </Brick>
        
        <Brick gridColumnStart="span 6" title={"Pricing"}>
          <uikit.Pricing />
        </Brick>
        
        <Brick title={"UnitValueWithTitle"}>
          <uikit.UnitValueWithTitle />
        </Brick>
        
        <Brick title={"DropDownButtonWithAvatar"}>
          <uikit.DropDownButtonWithAvatar />
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

        <Brick title={"CheckIndicator"}>
          <uikit.CheckIndicator />
        </Brick>

        <Brick title={"CheckIndicatorWithLabel"}>
          <uikit.CheckIndicatorWithLabel />
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

            <uikit.DialogFooter />
          </uikit.Dialog>
        </Brick>

        <Brick title={"DropdownList"}>
          <uikit.DropdownList theme="dialog">
            <li>Ichi</li>
            <li>Nii</li>
            <li>San</li>
          </uikit.DropdownList>
        </Brick>

        <Brick title={"Pills"}>
          <uikit.Pills qty={10} />
        </Brick>

        <Brick title={"Field"}>
          <uikit.Field tag='div' onChange={e => setName(e.target.value)} />
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
          <uikit.TimePicker {...nest} onChange={e => setName(e.target.value)} />
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

        <Brick title={"PlusMinusButtons"}>
          <uikit.PlusMinusButtons />
        </Brick>
      </uikit.Grid>
    </SymbolsProvider>
  )
}
