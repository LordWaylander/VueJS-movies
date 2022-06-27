<template lang="">
  <div class="user-list-page">
    <Header />
    <h2>COUPS DE COEURS</h2>
    <div className="result">
      <div v-if="movies.length > 0" class="card" v-for="movie in movies" :key="movie.id"> 
       <Card :movie="movie" :add="false" :setDataFromChild="setDataFromChild"/>
      </div>
      <div v-else>
        <h2>Pas de coups de coeurs !</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";
import axios from 'axios';

export default {
  data() {
    return {
      movies: []
    }
  },
  components: {
    Header,
    Card
  },
  methods: {
    setDataFromChild (movieID) {
      //update tableau movies, pour rendu dynamique
      // passer en props à Card dans la fonction removeStorage()
      // ne pas mettre danss Card (cf -> this.movies de getMovies())
      this.movies = this.movies.filter(
        element => element.id !== movieID
      )
    },
    getMovies(){
      let moviesId = window.localStorage.movies 
      ? window.localStorage.movies.split(",")
      : []

      for (let i = 0; i <= moviesId.length; i++) {
        axios.get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=f9a3efe8c813e81a40a9b661bde37457&language=fr-FR`
        )
        .then((result) => this.movies.push(result.data))
      }
    }
  },
  beforeMount() {
    this.getMovies()
  },
}
</script>