const App = {
  data() {
    return {
      title: '',
      page: 1,
      total: 0,//내가 가지고 올 총 영화 갯수!
      movies: [],
      showObserver: true
    }
  },
  computed: {
    hasTheRest() { //나머지가 있니? //반응형 데이터를 기준으로 알아서 갱신됨!! //Getter
      return this.total > this.movies.length  // 총 영화 개수보다 지금 가져온 데이터가 작다면 가저올 영화가 더 많음.
    }
  },
  mounted() { //created()로 하면 html로 연결이 안되었기 때문에 연결안됨!! mounted()를 써야함!! 
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("교차됨!!")
          this.searchMovies()
        }
      })
    })
    io.observe(this.$refs.observer1)  //참조를 걸어둔 요소중 observer11요소
  },
  methods: {
    async searchMovies(isFirst) {
      if (isFirst) {
        this.movies = []
        this.page = 1
      }
      let res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${this.title}&page=${this.page}`)
      res = await res.json()
      console.log(res)
      const { Search, totalResults } = res
      this.movies.push(...Search)
      this.page += 1
      this.total = Number(totalResults)
      this.showObserver = false
      setTimeout(() => {//callstack > web api -> 메크로 타스크에 넣음 -> 이벤트 루프를 통해서 callstack이 다 비워지면 callstack으로간다1
        this.showObserver = true
      }, 0)
    }
  }
}
Vue.createApp(App).mount('#app')
