<template>
  <v-app id="app">
    <nav-bar />
    <router-view />
    <v-footer  class="d-flex justify-center primary">
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  },
  
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e0e0e0;
  min-height: 100vh;
}
</style>
