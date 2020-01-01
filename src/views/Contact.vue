<template>
  <div id="list">
    <h3 id = "info">Please click the icon for contact information</h3>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <a href="https://www.linkedin.com/in/peterson-ngo-9802a9170/" target="blank"><img class="git" src="../assets/linkedin.png" /></a>
        </b-col>
        <b-col>
          <br>
          <a href="http://github.com/Ngope" target="blank"><img class="git" src="../assets/Github.png" /></a>
        </b-col>
        <b-col>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTgCgMJJVLQTPmZFkKgjGclwHVgfdxMcFgHndshqHnpqGbfKjqplQNsbQpTgsdRRCqpLB" target="blank"><img class= "git" src="../assets/gmail.png" /></a>
        </b-col>
      </b-row>
    </b-container>
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
#list {
  font-size: 20px;
}
.git {
  width: 150px;
}
  #info{
    padding: 30px;
  }
</style>
