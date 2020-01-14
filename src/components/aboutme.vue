<template>
  <div>
    <b-jumbotron header="Aspiring Software Engineer" lead="Indiana University Bloomington Class of 2022">
      <h1> Peterson Ngo.</h1>
    </b-jumbotron>
    <br>
    <b-container fluid>
      <b-row>
        <b-col cols="4"><img src="../assets/me.jpeg"></b-col>
        <b-col cols="8">
          <table class="table">
            <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
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
    border-radius: 70%;
  }
</style>
