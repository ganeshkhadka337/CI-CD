const { TextEncoder, TextDecoder } = require('util')
const matchers = require('@testing-library/jest-dom/matchers')

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

expect.extend(matchers)
