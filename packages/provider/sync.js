'use strict'

import { connect } from '@symbo.ls/socket/client'
import { window } from '@domql/globals'
import { init } from '@symbo.ls/init'
import { useDesignSystem, useGlobalState } from './hooks'
import { overwriteDeep } from '@domql/utils'

const isLocalhost = window && window.location && window.location.host.includes('local')

const onConnect = (element, state) => {
  return (socketId, socket) => {
    // send('components', { COMPONENTS: a(COMPONENTS) })
  }
}

const onDisconnect = (element, state) => {
  return () => {}
}

const onChange = (options) => {
  const [setDesignSystem] = useDesignSystem()
  const [setState] = useGlobalState()

  return (event, data) => {
    if (event === 'change') {
      const obj = JSON.parse(data)
      const { PROJECT_STATE, PROJECT_DESIGN_SYSTEM } = obj

      if (PROJECT_STATE) {
        const route = PROJECT_STATE.route
        if (route) window.history.pushState(null, null, route)
        else {
          setState(prev => overwriteDeep(prev, PROJECT_STATE))
        }
      }

      if (PROJECT_DESIGN_SYSTEM) {
        init(PROJECT_DESIGN_SYSTEM)
        setDesignSystem(prev => overwriteDeep(prev, PROJECT_DESIGN_SYSTEM))
      }
    }

    if (options.verbose && event === 'clients') {
      console.log(data)
    }
  }
}

export const SyncProvider = (options) => {
  connect(options.key, {
    source: isLocalhost ? 'localhost' : 'client',
    socketUrl: isLocalhost ? 'localhost:13336' : 'socket.symbols.app',
    location: window.location.host,
    onConnect: onConnect(options),
    onDisconnect: onDisconnect(options),
    onChange: onChange(options)
  })
}
