<template>
  <div>
  <b-jumbotron header="Aspiring Software Engineer" lead="Indiana University Bloomington Class of 2022">
    <h1> Peterson Ngo.</h1>
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
        </b-col>
      </b-row>
    </b-container>
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
</style>
