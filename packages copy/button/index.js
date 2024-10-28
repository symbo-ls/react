'use strict'

import React from 'react'
import * as D from '@symbo.ls/button'
import { IconText } from '@symbo.ls/react-icon'

export const Button = (props) => <IconText tag='button' {...props} />

Button.default = D.Button.props
