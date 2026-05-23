/* global require, global */

require('@testing-library/jest-dom')

global.MutationObserver = class MutationObserver {
  disconnect() {}
  observe() {}
}
