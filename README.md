# No Naughty Words

[![Build Status](https://travis-ci.org/jonathanong/no-naughty-words.svg?branch=master)](https://travis-ci.org/jonathanong/no-naughty-words)
[![codecov](https://codecov.io/gh/jonathanong/no-naughty-words/branch/master/graph/badge.svg)](https://codecov.io/gh/jonathanong/no-naughty-words)
[![Greenkeeper badge](https://badges.greenkeeper.io/jonathanong/no-naughty-words.svg)](https://greenkeeper.io/)

Censors text based on dictionaries of naughty words.

## Sources

- https://www.freewebheaders.com/full-list-of-bad-words-banned-by-google/
- Our own custom words

## API

```js
const noNaughtyWords = require('no-naughty-words')

const text = noNaughtyWords.filter('some shit')
// 'some ****'
```
