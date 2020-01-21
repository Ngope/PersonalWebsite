<template>
  <div>
  <b-jumbotron header="Aspiring Software Engineer" lead="Indiana University Bloomington Class of 2022">
    <h1> Peterson Ngo.</h1>
    <b-button variant="dark" >Download Resume</b-button>
    <br>
    <a href="../assets/ResumeF.pdf" type="button" download=""> Here</a>
  </b-jumbotron>
    <b-container fluid>
      <b-row>
        <b-col cols="4"><img src="../assets/me.jpeg"></b-col>
        <b-col cols="8">
          <table class="table">
            <thead class="thead-dark">
            <tr>
              <th scope="col">Courses Taken</th>
              <th scope="col">Courses ID</th>
              <th scope="col">Courses Grade</th>
              <th scope="col">Course Language</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>CSCI-C 200</td>
              <td>A</td>
              <td>Python</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>CSCI-C 212</td>
              <td>A-</td>
              <td>Java</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>CSCI-C 241</td>
              <td>C+</td>
              <td>N/A</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>CSCI-C 291</td>
              <td>B</td>
              <td>C and Unix</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>CSCI-C 322</td>
              <td>A</td>
              <td>Java</td>
            </tr>
            <tr>
              <th >6</th>
              <td>CSCI-C 343</td>
              <td>A-</td>
              <td>Java</td>
            </tr>
            </tbody>
          </table>
          <b-jumbotron lead="About me:">
            <br>
             <p>
               I am currently attending Indiana University Bloomington as a Computer Science major with a minor in Informatics.
               This project not only showcases my skills as a programmer, but it was intended to be a fun project to show my resume.
               I plan on updating this website as I learn more and more about design and as I become a better programmer.
             </p>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
    <hr>
    <div class="cards">
    <b-alert show variant="light">Jobs Timeline</b-alert>
      <div class="mt-3">
        <b-card-group deck>
          <b-card bg-variant="light" header="Goshen Noodle(Server) May 2016 - May 2019">
            <b-card-text>Worked with other servers to provide incoming customers with a satisfactory visit. I served many customers and helped cooks when needed.
            Working in this environment showed me responsibility in terms of taking care of the customers and the business at the same time. Furthermore, I learned how to cooperate
            with others in order to help the business run more smoothly. </b-card-text>
          </b-card>

          <b-card bg-variant="dark" header="Jimmy John's (Deliver Driver/Team Member) May 2019 - August 2019 " text-variant="white" class="text-center">
            <b-card-text>Worked in the Kitchen to prepare sandwiches and talked to incoming customers as they ordered the sandwiches. If I was not in the store,
              I was delivering sandwiches that were phone ordered or ordered online. As a team member, I helped clean and talked to many customers.
              Working with many other employees showed me a sense of teamwork in order to achieve a common goal.</b-card-text>
          </b-card>

          <b-card bg-variant="light" header="IU Safety Escort (Navigation) August 2019 - Present" class="text-center">
            <b-card-text>As a member of IU safety escort, my job is to help the driver navigate through on and off campus locations to drop off students who are using our service.
              The skills required for this job include multi-tasking and being able to well with others.
              Working as a team leads to swift and smooth rides. </b-card-text>
          </b-card>
        </b-card-group>
        <hr>
        <b-alert show variant="light">Clubs</b-alert>
        <div class="mt-3">
          <b-card-group deck>
            <b-card bg-variant="dark" header="Asian American Association (AAA)" text-variant="white" class="text-center">
              <b-card-text>
                <p>Aug 2019- Present</p>
                <p>This club represents the Asian student body at IU. It is a place to gather and share Asian culture through one another without judgement.</p>
              </b-card-text>
            </b-card>

            <b-card bg-variant="light" header="Vietnamese Student Association (VSA)" class="text-center">
              <b-card-text>
                <p>Aug 2019- Present</p>
                <p>This club represents the Vietnamese student body at IU. It is a place to gather and share Vietnamese culture through one another without judgement.
                We also hold events to spread Viet culture.</p>
              </b-card-text>
            </b-card>

            <b-card bg-variant="dark" header="Code @ IU" text-variant="white" class="text-center">
              <b-card-text>
                <p>Aug 2018 - Jan 2019</p>
                <p>This club was a coding club at iu where students of different majors camne together under 1 similar interest, that is, coding. In this club we shared major news about new technologies
                and discussed controversial topics in the tech industry.</p>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
      </div><!---ends the card div-->
  </div>
</template>

<script>
export default {
  name: "aboutme"
};
</script>

<style scoped>
  img {
    border-radius: 50%;
    padding-bottom: 60px;
  }
  cards{
    padding: 10px;
  }
</style>
