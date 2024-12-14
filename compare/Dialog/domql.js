'use strict'

export const DialogFooter = {
  extend: 'Flex',
  props: {
    align: 'center flex-end',
    gap: 'X2',
    margin: 'auto - -',
    padding: 'Y2 X2'
  },

  childExtend: {
    extend: 'Button',
    props: {
      textTransform: 'uppercase',
      background: 'transparent',
      '@dark': {
        theme: 'primary @dark .color-only'
      },
      '@light': {
        theme: 'primary @light .color-only'
      },
      '&': {
        padding: 'Z A'
      },
      ':hover': {
        theme: 'tertiary'
      },
      ':active': {
        background: 'white .1'
      }
    }
  },

  cancel: {
    text: 'cancel'
  },
  ok: {
    text: 'ok'
  }
}
