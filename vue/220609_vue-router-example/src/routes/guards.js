import router from './index.js'

router.beforeEach((to) => {
  // console.log(to)
  // console.log(to.meta.auth)
  // console.log(JSON.parse(localStorage.getItem('currentUser')))

  if (to.meta.auth) {
    const { name } = JSON.parse(localStorage.getItem('currentUser') || '{}')
    if (name) {
      return true
    } else {
      return '/'
    }
  }
  return true
})
