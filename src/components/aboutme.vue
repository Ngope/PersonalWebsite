<template>
  <div>
  <b-jumbotron header="Aspiring Software Engineer" lead="Indiana University Bloomington Class of 2022" class="MainHeader">
    <h1> Peterson Ngo.</h1>
  </b-jumbotron>
    <b-container fluid>
      <b-row>
        <div class="Middle-Section">
            <div class="My-Profile-Pic">
              <b-col cols="4"><img src="../assets/me.jpeg" class="Headshot"></b-col>
            </div>
          <div class="aboutME">
          <b-col cols="8">
            <b-list-group class="greyBackground">
              <b-list-group-item><span class="InfoHeader"><u>About me</u></span></b-list-group-item>
              <b-list-group-item> <span class="bodyHeader">Fact: </span>
                I started this personal website as a fun side project to help build my skills as a front-end developer. In this website I use a lightweight framework called Vue.
                I plan to keep updating this as I begin to obtain more knowledge and become a full stacked developer.
              </b-list-group-item>
              <b-list-group-item><span class="bodyHeader">Major: </span> <span class="answer">B.S. Computer Science</span></b-list-group-item>
              <b-list-group-item><span class="bodyHeader">Minor: </span> <span class="answer">Informatics</span></b-list-group-item>
              <b-list-group-item><span class="bodyHeader">GPA: </span> <span class="answer">3.6/4.0</span></b-list-group-item>
              <b-list-group-item><span class="bodyHeader">Language: </span><span class="answer"> Java</span> </b-list-group-item>
            </b-list-group>
          </b-col>
          </div>
        </div> <!--ends the middle section-->
      </b-row>
    </b-container>
    <hr>
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
  </div> <!--done with content-->
</template>

<script>
export default {
  name: "aboutme"
};
</script>

<style scoped>
  .Middle-Section{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
   .bodyHeader{
    font-weight: bold;
     font-size:18px;
     float: left;
     margin-left: 2.0em;
   }
   .answer{
     text-align: right;
   }
  .Headshot{
    border-radius: 50%;
    padding-bottom: 60px;
    width: auto;
    margin-left: 2em;

  }
  .aboutME{
    display: flex;
    justify-content: space-around;
    align-self:center;
    width: 100%;

  }
  .MainHeader {
    padding-top: 11.0em;
    border-bottom: 2px solid grey;
  }
   .InfoHeader{
     font-weight: bold;
     font-size: 25px;
   }
  .list{
    font-size: 20px  !important;
    margin: 2em;
  }
  .git{
    width: 150px  !important;
  }

  @media only screen and (max-width: 1200px) {
    .Middle-Section{
      display: flex;
      flex-flow: column nowrap;
    }
    .My-Profile-Pic{
      display: flex;
      justify-content: center;
    }
    img{
      width: 100%;
    }
  }
  @media screen and (max-width: 800px){
    img {
      width: 100%;
    }
  }
</style>
