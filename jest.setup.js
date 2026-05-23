const { TextEncoder, TextDecoder } = require('util')

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

global.MutationObserver = class MutationObserver {
  disconnect() {}
  observe() {}
}

require('@testing-library/jest-dom')
