<template>
  <div id="app">
    <Navigation id="nav"></Navigation>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "Nav",
  components: {
    Navigation: NavBar
  }
};
</script>

<style>


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: lightsteelblue;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
}
</style>
