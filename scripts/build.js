
const globby = require('globby')
const path = require('path')
const fs = require('fs')

const files = globby.sync('*.txt', {
  cwd: path.resolve('sources')
})

const words = new Set()

files.forEach((name) => {
  const txt = fs.readFileSync(path.resolve('sources', name), 'utf8')
  txt.trim().split('\n').filter(Boolean).forEach(x => words.add(x.toLowerCase().replace('�', '')))
})

const list = Array.from(words.values())

fs.writeFileSync('data/words.txt', list.join('\n'))
