import {defineSupportCode} from 'cucumber'

defineSupportCode(function ({setDefaultTimeout}) {
  setDefaultTimeout(60 * 1000)
})
