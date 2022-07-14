//require()
//module.exports

//////////
//abc파일만들기
// const fs = require('fs')
// fs.writeFileSync(`${__dirname}/abc.json`, '{"a": 1}')

//////////
//test파일 안에서 abc파일 만들기
// const fs= require('fs')
// ;(async () => {
//   await fs.promises.mkdir(`${__dirname}/test`)
//   await fs.promises.writeFile(`${__dirname}/test/abc.json`, '{"a": 1}')
// })()

//////////
//test파일 안에서 abc파일 만들기 위에랑 같은코드임!
// const fs= require('fs')
// fs.mkdirSync(`${__dirname}/test`)
// fs.writeFileSync(`${__dirname}/test/abc.json`, '{"a": 1}')

// const file = fs.readFileSync(`${__dirname}/test/abc.json`, { encoding: 'utf8'})
// console.log(file)

//////////
//만약 파일이 없으면 만들어라!!
const fs= require('fs')

if(!fs.existsSync(`${__dirname}/test`)) {
  fs.mkdirSync(`${__dirname}/test`)
}

if(!fs.existsSync(`${__dirname}/test/abc.json`)) {
  fs.writeFileSync(`${__dirname}/test/abc.json`, '{"a": 1}')
}

const file = fs.readFileSync(`${__dirname}/test/abc.json`, { encoding: 'utf8'})
console.log(file)
