<template lang="">
  
    <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path"/>
    <img v-else src="/img/poster.jpg"/>

    <h2>{{movie.title}}</h2>

    <h5 v-if="movie.release_date">Sorti le {{dateFormat(movie.release_date)}}</h5>
    <h5 v-else >date inconnue</h5>

    <h4>{{movie.vote_average}}/10<span>&#127775;</span></h4>

    <ul v-if="movie.genre_ids">
      <li v-for="movieGenre in genresMovies(movie.genre_ids)">
        {{movieGenre}}
      </li>
    </ul>
    <ul v-else>
      <li v-for="genre in movie.genres">
        {{genre.name}}
      </li>
    </ul>

    <h3 v-if="movie.overview">Synopsis</h3>
    <p>{{movie.overview}}</p>

    <div v-if="add" @Click="addStorage(movie)" class="btn">Ajouter aux coups de coeurs</div>
    <div v-else @Click="removeStorage(movie)" class="btn">Retirer des coups de coeur</div>
</template>

<script>
import poster from '/img/poster.jpg'

export default {
  data(){
    return {
      poster: poster,
    }
  },
  props: {
    movie: Object,
    genres: Object,
    add: Boolean,
    setDataFromChild:Function
  },
  methods: {
    dateFormat(date) {
      let [yy, mm, dd] = date.split('-')
      return [dd, mm, yy].join('/');
    },
    genresMovies(idGenre){
      let genresArray = [];
      for (let i = 0; i < idGenre.length; i++) {
        for (let j = 0; j < this.genres.length; j++) {
          if (idGenre[i] === this.genres[j].id) {
            genresArray.push(this.genres[j].name)
          }
        }
      }
      return genresArray;
    },
    addStorage(movie){
      let storeData = window.localStorage.movies ? window.localStorage.movies.split(',') : [];
      if (!storeData.includes(movie.id.toString())) {
        storeData.push(movie.id)
        window.localStorage.movies = storeData
      }
    },
    removeStorage(movie) {
      let storeData = window.localStorage.movies.split(',');

      let indexMovie = storeData.indexOf(movie.id.toString());
      if(indexMovie != -1){
        let movie = this.movie
        storeData.splice(indexMovie, 1);
        this.setDataFromChild(movie.id)
        window.localStorage.movies = storeData;
      }
    }
  },
}
</script>
