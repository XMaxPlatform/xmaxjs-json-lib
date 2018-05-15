/* eslint-env mocha */

const assert = require('assert')

describe('syntax', () => {
  for (const fn of [
    './api',
    './schema'
  ]) {
    it(fn, function () {
      require(fn)
    })
  }
})

const Fcbuffer = require('xmaxjs-fcbuffer-lib')
const schema = require('./schema')

describe('fcbuffer', () => {
  it('parses', () => {
    const fcbuffer = Fcbuffer(schema)
    const errors = JSON.stringify(fcbuffer.errors, null, 4)
    assert.equal(errors, '[]')
  })

})
