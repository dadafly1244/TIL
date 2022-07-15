// const fs = require('fs')
// const marked = require('marked')
// const yaml = require('js-yaml')
// const jsdom = require('jsdom')
// const { JSDOM } =  jsdom


// const mdDir = `${__dirname}/markdowns`
// const htmlDir = `${__dirname}/html`
// const indexHtml = fs.readFileSync(`${__dirname}/index.html`, {encoding: 'utf8'})

// if(!fs.existsSync(htmlDir)){
//   fs.mkdirSync(htmlDir)
// }


// const mds = fs.readdirSync(mdDir) //mds는 배열 데이터!!  [ 'abc.md', 'xyz.md' ] 

// mds.forEach(file => {
//   let md = fs.readFileSync(`${mdDir}/${file}`, {encoding: 'utf8'})//console.log(md)
//   const headers = getHeaders(md) // 한번 해더 정보를 받아오고 
//   md = removeHeaders(md, headers)// 해더 정보를 지워라!! 
//   const { title } =yaml.load(headers) // console.log('xxx:::::',xxx) //{ title: 'ABC(abc)', description: 'ABC...', tags: [ 'a', 'b', 'c' ] } //{ title: 'XYZ(xyz)' }
//   const dom = new JSDOM(indexHtml)


//   const html = marked.parse(md) //console.log(html)
//   dom.window.document.querySelector('title').innerHTML = title
//   dom.window.document.body.innerHTML = html //jsdom을 통하면 문자데이터를 교체하는 것이 아니라 진짜 안에 내용을 바꿀 수 있다!!  const data = indexHtml.replace('</body>', `${html}</body>`)

//   const filename = file.replace('.md','.html')

//   fs.writeFileSync(`${htmlDir}/${filename}`,dom.serialize()) // writeFileSync(경로, 데이터) // dom.serialize() 돔을 문자 데이터로 만들어줌!

// })

// function getHeaders(md) {
//   return md.split('---').filter(s=> s)[0]// 빈문자 날리고 첫번째 부분을 간다!! 
// }
 
// function removeHeaders(md, headers) {
//   // console.log(JSON.stringify(headers))
//   return md.replace('---' + headers + '---','') //  하이푼 --- --- 사이의 headers라는 변수 부분에서 headers를 빈 문자로 바꿔라!
// }

///////////////////////
const fs = require('fs')
const marked = require('marked')
const yaml = require('js-yaml')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const mdDir = `${__dirname}/markdowns`
const htmlDir = `${__dirname}/dist`
const indexHTML = fs.readFileSync(`${__dirname}/index.html`, { encoding: 'utf8' })

if (fs.existsSync(htmlDir)) {
  fs.rmSync(htmlDir, { recursive: true })
}
fs.mkdirSync(htmlDir)

const mds = fs.readdirSync(mdDir)
mds.forEach(file => {
  let md = fs.readFileSync(`${mdDir}/${file}`, { encoding: 'utf8' })
  const headers = getHeaders(md)
  md = removeHeaders(md, headers)
  const { title } = yaml.load(headers)
  const dom = new JSDOM(indexHTML)

  const html = marked.parse(md)
  dom.window.document.querySelector('title').innerHTML = title
  dom.window.document.body.innerHTML = html

  const filename = file.replace('.md', '')
  fs.mkdirSync(`${htmlDir}/${filename}`)
  fs.writeFileSync(`${htmlDir}/${filename}/index.html`, dom.serialize())
})

function getHeaders(md) {
  return md.split('---').filter(s => s)[0]
}
function removeHeaders(md, headers) {
  return md.replace('---' + headers + '---', '')
}