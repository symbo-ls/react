import * as React from 'react'
import { SymbolsProvider } from "@symbo.ls/react";

import { Brick, BrickTitle } from './Brick'
import image from './test-img.jpg'

import * as uikit from '@symbo.ls/react'
import * as atoms from '@symbo.ls/atoms'
import svg from './bell.svg'

const components = {
  StatusIndicator: {},
  Avatar: {},
  AvatarIndicator: {},
  AvatarBundle: {},
  TitleParagraph: {},
  User: {},
  Label: {},
  UserWithLabel: {},
  CountIndicator: {},
  ChatUser: {},
  UserButtonSet: {},
  UserMessage: {},
  UserWithButton: {},

  CommonButton: {},
  CancelConfirmButtons: {},
  IconCommonButton: {},
  IcontextButton: {},

  Tab: {},
  IconTab: {},
  TitleParagraphWithButton: {},
  Modal: {},
  Message: {},
  SuccessIndicator: {},
  CompleteProcess: {},
  UploadButtonWithIcon: {},
  UploadLabel2: {},
  UploadModal: {},
  UploadModal3: {},
  UploadButton: {},
  UploadLabel: {},
  UploadModal2: {},
  UploadImage: {},
  DoubleUnitValue: {},
  ProgressLine: {},
  UploadingProcess: {},
  UploadedProcess: {},
  // UnitValue: {
  //   Value: { text: '2:20' },
  //   Unit: { text: 'AM' }
  // },
  ProgressLineWithUnitValue: {},
  UploadingProcess2: {},
  UploadedProcess2: {},
  ProgressCircleWithSideUnitValue: {},
  UploadingProcess3: {},
  UploadedProcess3: {},
  ProgressCircle: {},
  ProgressCircleWithIcon: {},
  ProgressCircleWithUnitValue: {},
  UploadingProcess4: {},
  UploadedProcess4: {},
  UploadModal4: {},

  Checkbox: {},
  Radio: {},
  Toggle: {},
  CheckboxTitleParagraph: {},
  RadioTitleParagraph: {},
  ToggleTitleParagraph: {},

  Field: {},
  FieldTemplate: {},
  CommonField: {},
  CommonFieldTemplate: {},
  Textarea: {},
  TextareaWithButton: {},
  NumberField: {},
  ParagraphButton: {},
  VerificationCode: {},
  ResetPassword: {},
  ParagraphButtonWithCheckbox: {},
  ContactForm: {},
  SignUp: {},
  DoubleHr: {},
  SocialLink: {},
  LogIn: {},
  SlideTabs: {},

  Search: {},
  SearchWithButton: {},
  DropDownButton: {},
  SearchWithDropDownButton: {},
  ListTemplate: {},
  ListWithTitleTemplate: {},
  GroupListTemplate: {},
  GroupListWithSearchTemplate: {},

  CheckIndicator: {},
  CheckIndicatorWithLabel: {},
  CheckStep: {},
  CheckSteps: {},
  RadioIndicator: {},
  RadioIndicatorWithLabel: {},
  RadioStep: {},
  RadioSteps: {},
  LineSteps: {},
  LineStepsWithTitleParagraph: {},

  StepCard: {},
  UnitValueWithLabel: {},
  BalanceCard: {},
  UnitValueWithTitle: {},
  DropDownButtonWithAvatar: {},
  ConvertCard: {},
  CurrencyConvert: {},
  PlusMinusButtons: {},
  Pracing: {},
}

export default function ComponentWall(props) {
  console.log("uikit:", uikit)
  console.log(Object.keys(uikit).filter(v => !atoms[v]).join('\n'))
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
          
        { 
          Object.keys(components).filter(v => uikit[v]).map(v => React.createElement(uikit[v]))
        }
          
      </div>
    </SymbolsProvider>
  )
}
