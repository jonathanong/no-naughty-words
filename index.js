
const escapeStringRegexp = require('escape-string-regexp')
const path = require('path')
const fs = require('fs')

const words = fs.readFileSync(path.resolve(__dirname, 'data/words.txt'), 'utf8').split('\n').filter(Boolean)

function * stars (length) {
  let i = 0
  while (i++ < length) {
    yield '*'
  }
}

class NoNaughtyWords {
  constructor () {
    this.words = new Set()
    this.add(...words)
  }

  add (...words) {
    words.forEach((word) => this.words.add(word))
    this.compile()
  }

  remove (...words) {
    words.forEach((word) => this.words.delete(word))
    this.compile()
  }

  replace (word) {
    return Array.from(stars(Buffer.byteLength(word))).join('')
  }

  compile () {
    this.re = new RegExp(`\\b(${Array.from(this.words.values()).map(escapeStringRegexp).join('|')})\\b`, 'ig')
  }

  filter (text) {
    return text.replace(this.re, (substring, word) => {
      return this.replace(word)
    })
  }
}

exports = module.exports = new NoNaughtyWords()
exports.NoNaughtyWords = NoNaughtyWords
