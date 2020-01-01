<template>
  <div class="home">
    <aboutme />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import aboutme from "@/components/aboutme.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    aboutme
  }
};
</script>
