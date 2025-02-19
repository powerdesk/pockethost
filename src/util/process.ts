import { ioc } from '$constants'
import { gracefulExit } from './exit'
;['unhandledRejection', 'uncaughtException'].forEach((type) => {
  process.on(type, (e) => {
    console.error(`${e}`)

    const debug = (() => {
      try {
        return ioc.service('settings').DEBUG
      } catch {
        return true
      }
    })()
    if (debug) {
      console.error(e.stack)
      gracefulExit()
    }
  })
})
