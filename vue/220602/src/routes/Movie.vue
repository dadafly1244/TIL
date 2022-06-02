<template>
  <h1>
    {{ movie.Title }}
    <div
      :style="{backgroundImage: `url(${requestDiffSizePoster(movie.Poster)})`}"
      class="poster"></div>
  </h1>
</template>

<script>
export default {
  data() {
    return {
      movie: {
        
      }//영화의 상세 정보를 가지고 있을 데이터
    }
  },
  created() {
    this.searchMovieDetails()
  },
  methods: {
    async searchMovieDetails() {
      console.log(this.$route)
      let res= await fetch(`https://www.omdbapi.com?apikey=7035c60c&i=${this.$route.params.heropy}`)
      res = await res.json()
      console.log(res)
      this.movie = res
    },
    requestDiffSizePoster(src = '') {
      // if(!src)  return
      return  src.replace('SX300', 'SX700')// 문자데이터 기본값을 할당해주면 replace에서 에러 안나옴!
    }
  }
}

</script>


<style scoped lang="scss">
.poster {
  width: 400px;
  height: calc(400px * 3/2);
  background-size: cover;
  background-color: lightgray;
}

</style>
