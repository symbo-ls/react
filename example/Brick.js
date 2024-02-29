
import * as React from 'react'
import { H6, Box, Subhead, Flex } from '../packages'

export function Brick(props) {
  return (
    <Flex gridColumnStart="span 2"  align="center center" flow="column" padding="D1 C1" boxSizing="border-box" position="relative" {...props}> 
      <Subhead margin='0 0 C 0' text={props.title} fontSize='14px' color='white .35' position='absolute' left='50%' transform='translateX(-50%)' top='A' />
      {props.children}
    </Flex>
  )
}

Brick.defaultProps = {
  round: 'Z',
  border: '1px solid transparent',
  transition: 'Z background, Z border',
  ':hover': {
    background: 'white .035',
    border: '1px, solid, white .035'
  }
}