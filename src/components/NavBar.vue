<template>
  <div>
    <nav>
      <router-link
        class="spacing"
        v-for="routes in links"
        v-bind:key="routes.id" :to="`${routes.page}`"
        >{{ routes.text }}</router-link
      >
    </nav>
    <div id="name">
      <h4>Peterson </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 2,
          text: "Contact",
          page: "/Contact"
        },
        {
          id: 1,
          text: "About",
          page: "/About"
        },
        {
          id: 0,
          text: "Home",
          page: "/Home"
        }
      ]
    };
  }
};
</script>

<style scoped>
.spacing {
  margin-right: 20px;
  float: right;
}
  #name{
    float: left;
  }
</style>
