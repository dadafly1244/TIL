//컴포넌트
const App = {
  //반응형 데이터 || 반응성을 가진 데이터 
  data() {
    return {
      title: '',
      page: 1,
      movies: [],
      msg: 'HEROPY?!'
    }
  },
  //계산된 데이터
  computed: {
    //Getter
    customMovies() { //getter 같은 거라서 함수지만 data처럼 써야함. 
      return this.movies.map(movie => { //계산된 결과를 map통해서 새로운 배열이 반환!! 
        return {
          poster: movie.Poster,
          title: movie.Title,
          id:  movie.imdbID

        }
      })
    },
    reversedMsg: {
      get() { //Getter: 값을 얻어낼 때 쓰는 것!! 
        return this.msg.split('').reverse().join('')
      },
      set(value) { // Setter
        console.log('commputed setter:', value)
      }
    }
  },
  watch: {
    movies(newValue, oldValue) {
      console.log('new:' ,newValue)
      console.log('old:' ,oldValue)
    }
  },
  methods: {
    async searchMovies(isFirst) { //최초요청 
      if(isFirst) {
        this.movies =[]
        this.page = 1
      }
      let res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${this.title}&page=${this.page}`)
      res = await res.json()
      console.log(res)
      const {Search, totalResults} = res
      this.movies.push(...Search)
      this.page += 1
    },
    reverseMsg() {
      return this.msg.split('').reverse().join('')
    }
  }
}
Vue.createApp(App).mount('#app')

