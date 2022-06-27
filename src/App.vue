<template lang="">
  <div>
    <Router />
    <router-view></router-view>
  </div>
</template>
<script>
import Router from './router/index'
export default {
  components: {
    Router
  },
  created(){
    const routes = Router.getRoutes()
    console.log(routes);
  }
}
</script>