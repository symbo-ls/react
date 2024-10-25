'use strict'

import React, { forwardRef } from 'react'
import { Box } from '../Box'

export const Img = forwardRef((props, ref) => <Box tag='img' ref={ref} {...props} />)
