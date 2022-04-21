function sum(a, b, cb) {
  setTimeout(function () {
    cb(a + b)
  }, 1000)
}


const res = sum(2, 5, function(res) {
  console.log(res)
})
//7