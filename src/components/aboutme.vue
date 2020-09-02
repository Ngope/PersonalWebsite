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
              <b-list-group-item>
                <p> I started this personal website as a fun side project to help build my skills as a front-end developer. In this website I use a lightweight framework called Vue.
                  I plan to keep updating this as I begin to obtain more knowledge and become a full stacked developer.</p>
              </b-list-group-item>
              <b-list-group-item><span class="bodyHeader">Major: </span> <span class="answer">B.S. Computer Science</span></b-list-group-item>
              <b-list-group-item><span class="bodyHeader">Minor: </span> <span class="answer">Informatics</span></b-list-group-item>
              <b-list-group-item><span class="bodyHeader">GPA: </span> <span class="answer">3.604/4.0</span></b-list-group-item>
              <b-list-group-item><span class="bodyHeader">Email: </span><span class="answer"> Ngop0629@gmail.com</span> </b-list-group-item>
            </b-list-group>
          </b-col>
          </div>
        </div> <!--ends the middle section-->
      </b-row>
    </b-container>

    <b-jumbotron>
    <div class= "Skills">
      <b-list-group-item><span class="InfoHeader"><u>Technical Skills</u></span></b-list-group-item>
        <b-list-group-item>
          <div class="inside-list">
            <span class="bodyHeader">Java </span>
            <img src="../assets/Java-icon.png" class="Skills-icons">
          </div>
        </b-list-group-item>
      <b-list-group-item>
        <div class="inside-list">
          <span class="bodyHeader">C</span>
          <img src="../assets/C-Icon.png" class="Skills-icons">
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <div class="inside-list">
          <span class="bodyHeader">Vue</span>
          <img src="../assets/vue.png" class="Skills-icons">
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <div class="inside-list">
          <span class="bodyHeader">HTML & CSS</span>
          <img src="../assets/html5.png" class="Skills-icons">
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <div class="inside-list">
          <span class="bodyHeader">Git</span>
          <img src="../assets/git.png" class="Skills-icons">
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <div class="inside-list">
          <span class="bodyHeader">Linux Commands</span>
          <img src="../assets/console.png" class="Skills-icons">
        </div>
      </b-list-group-item>
    </div>
    </b-jumbotron>
    <div class="list">
    <b-alert show variant="light">Contact & Social Media</b-alert>
    <div class="mt-3 hello">
      <b-card-group deck>
        <b-card bg-variant="light" header="LinkedIn" class="text-center">
          <a href="https://www.linkedin.com/in/peterson-ngo-9802a9170/" target="blank"><img class="icons" src="../assets/linkedin.png" ></a>
        </b-card>
        <b-card bg-variant="light" header="GitHub" class="text-center">
          <br>
          <a href="http://github.com/Ngope" target="blank"><img class="icons" src="../assets/Github.png" /></a>
        </b-card>
        <b-card bg-variant="light" header="GMail" class="text-center">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTgCgMJJVLQTPmZFkKgjGclwHVgfdxMcFgHndshqHnpqGbfKjqplQNsbQpTgsdRRCqpLB" target="blank"><img class= "icons" src="../assets/gmail.png" /></a>
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
   .bodyHeader {
     font-weight: bold;
     font-size: 20px;
     float: left;
     margin-left: 2.0em;
   }
   .answer{
     text-align: right;
   }
    .Skills{
      width:40%;
      margin: 0 auto;

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
    margin: 2em;
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
    margin: 0 2em;
    margin-bottom: 2em;
  }
  .icons{
    width: 30%  !important;
  }
  .Skills-icons{
    width: 10%;
  }
  .My-Profile-Pic{
    display: flex;
    justify-content: center;
    width:80%
  }
   .inside-list{
     display: flex;
     flex-flow: row wrap;
     justify-content: space-between;
     align-items: center;
   }
  b-list-group-item{
    display:flex !important;
    flex-flow:column wrap !important;
  }
  @media only screen and (max-width: 1200px) {
    .Middle-Section{
      display: flex;
      flex-flow: column nowrap;
      margin-bottom: 3em;
    }
    .My-Profile-Pic{
      display: flex;
      justify-content: center;
    }
    .icons{
      width: 40%!important;
    }
  }
  @media screen and (max-width: 900px){
    .icons{
      width: 40%  !important;
    }
    .Headshot{
      width:auto;
      margin: auto 2em;
    }
    .mt-3 hello{
      display: flex;
      flex-flow: column wrap;
    }
    .Skills span{
      font-size:15px;
    }

    .Skills-icons{
      width: 20%;
      margin: 1em;
    }
    .inside-list{
      flex-direction: column;
    }
  }
  @media screen and (max-width: 380px){
  b-jumbotron header{
    font-size: 30px;
   }
    .Headshot{
      width: 280%;
      margin: auto;
      justify-content: center;
    }
    Skills span{
      font-size:7px;
    }
    .Skills-icons{
      width: 30%;
      margin:1em;
    }
    .inside-list{
      flex-direction: column;
    }
  }
</style>
