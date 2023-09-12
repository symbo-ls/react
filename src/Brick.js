import * as React from 'react'

export function Brick(props) {
  return (
    <div style={{
        border: 'solid 3px black',
        padding: '10px',
        margin: '5px',
        display: 'inline-block',
      }}>
      <h3 style={{
          margin: '0 0 8px 0',
        }}>
        {props.title}
      </h3>
      {props.children}
    </div>
  )
}
