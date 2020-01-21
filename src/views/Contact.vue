<template>
  <div class="list">
    <b-alert show variant="light">Click the icons</b-alert>
    <div class="mt-3">
      <b-card-group deck>
        <b-card bg-variant="light" header="LinkedIn" class="text-center">
          <a href="https://www.linkedin.com/in/peterson-ngo-9802a9170/" target="blank"><img class="git" src="../assets/linkedin.png" ></a>
        </b-card>
        <b-card bg-variant="light" header="GitHub" class="text-center">
          <br>
          <a href="http://github.com/Ngope" target="blank"><img class="git" src="../assets/Github.png" /></a>
        </b-card>
        <b-card bg-variant="light" header="GMail" class="text-center">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTgCgMJJVLQTPmZFkKgjGclwHVgfdxMcFgHndshqHnpqGbfKjqplQNsbQpTgsdRRCqpLB" target="blank"><img class= "git" src="../assets/gmail.png" /></a>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      email: "ngop@iu.edu",
      git: "github.com/Ngope"
    };
  }
};
</script>

<style scoped>
.list {
  font-size: 20px;
}
.git {
  width: 150px;
}
</style>
