'use strict'

import React from 'react'

export const Text = (props) => (
  <>
    {props.text || props.children}
  </>
)
