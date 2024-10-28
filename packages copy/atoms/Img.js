'use strict'

import React, { forwardRef } from 'react'
import { Box } from '@symbo.ls/react-box'

export const Img = forwardRef((props, ref) => <Box tag='img' ref={ref} {...props} />)
