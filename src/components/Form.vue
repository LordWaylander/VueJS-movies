<template lang="">
  <div class="form-component">
    <div class='form-container'>
      <form>
        <input type="text" placeholder='Search' id="search-input" @input="search = $event.target.value" />
        <input type="submit" value="Rechercher" />
      </form>
      <div class='btn-sort-container'>
        <div class='btn-sort' id="goodToBad" @click="setSortGoodBad">
          Top<span>&#8594;</span>
        </div>
        <div class='btn-sort' id="badToGood" @click="setSortGoodBad">
              Flop<span>&#8594;</span>
        </div>
      </div>
    </div>
    <div class="result">
      <div class="card" v-for="movie in movies" :key="movie.id">
        <Card :movie="movie" :genres="genres" :add="true"/>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Card from './Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      movies:[],
      genres:[],
      search:'code'
    }
  },
  methods: {
    getMovies() {
      axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=f9a3efe8c813e81a40a9b661bde37457&query=${this.search}&language=fr-FR&include_adult=true`
      ).then(result => this.movies = result.data.results );

      axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=f9a3efe8c813e81a40a9b661bde37457&language=fr-FR`
      ).then(result => this.genres = result.data.genres)
    },
    setSortGoodBad(e) {
      this.movies.sort((a, b) => {
        if (e.target.id === 'goodToBad') {
          return b.vote_average - a.vote_average;
        } else if (e.target.id === 'badToGood') {
          return a.vote_average - b.vote_average;
        }else {
          return '';
        }
      })
    }
  },
  beforeMount(){
    this.getMovies()
  },
  watch:{
    search(){
      this.getMovies()
    }
  }
}
</script>