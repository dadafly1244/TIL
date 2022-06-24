import 'regenerator-runtime'
const moviesEl = document.querySelector('.movies')
const anotherMoviesEl = document.querySelector('.another-movies')
getMovie(1, moviesEl)
getMovie(1, anotherMoviesEl)

const btnEl = document.querySelector('button')
btnEl.addEventListener('click', () => {
  getMovie(2, moviesEl)
})

async function getMovie(page, containerEl) {
  const { data } = await axios({
    url: `https://www.omdbapi.com?apikey=7035c60c&s=frozen&page=${page}`,
    method: 'GET'
  })
  console.log(data)
  const movies = data.Search
  renderMovies(movies, containerEl)
}
function renderMovies(movies, containerEl) {
  movies.forEach(movie => {
    console.log(movie)
    const movieEl = document.createElement('div')
    movieEl.textContent = movie.Title
    containerEl.append(movieEl)
  })
}
