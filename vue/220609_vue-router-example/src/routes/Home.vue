<template>
  <h1>serch!</h1>
  <input
    v-model="searchText"
    @keydown.enter="searchMovies" />

  <ul>
    <li
      v-for="movie in movies"
      :key="movie.imdbID">
      <RouterLink :to="`/movies/${movie.imdbID}`">
        {{ movie.Title }}
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      searchText: '',
      movies: []
    }
  },
  methods: {
    async searchMovies(){
      let res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${this.searchText}`)
      res = await res.json()
      console.log(res)
      this.movies = res.Search
    }
  }
}
</script>
