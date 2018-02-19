
const assert = require('assert')

const noNaughtyWords = require('..')

const assertions = [
  ['asshole', '*******'],
  ['you fucking asshole', 'you ******* *******'],
  ['you fucking little shit', 'you ******* little ****'],

  ['some benign text', 'some benign text'],
  ['hello its me', 'hello its me']
]

assertions.forEach(([input, output]) => {
  test(`filter(${input}) === ${output}`, () => {
    assert.equal(noNaughtyWords.filter(input), output)
  })
})
