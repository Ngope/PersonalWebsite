<template>
    <div class="about">
        <div class="clubsCourse">
            <b-list-group class="greyBackground">
                <b-list-group-item><span class="InfoHeader"><u>Clubs</u></span></b-list-group-item>
                <b-list-group-item> <span class="bodyHeader">Asian American Association (Aug 2020 - Present)</span></b-list-group-item>
                <b-list-group-item><span class="bodyHeader">Vietnamese Student Association (Sept 2020 - Present) </span></b-list-group-item>
                <b-list-group-item><span class="bodyHeader">Code @ IU (Aug 2018 - April 2019) </span></b-list-group-item>
            </b-list-group>
        </div> <!--This is the end of Clubs -->
        <div class="clubsCourse">
            <b-list-group class="greyBackground">
                <b-list-group-item><span class="InfoHeader"><u>Related Coursework</u></span></b-list-group-item>
                <b-list-group-item> <span class="bodyHeader">Software Development in Java</span></b-list-group-item>
                <b-list-group-item><span class="bodyHeader">Data Structures and Algorithms </span></b-list-group-item>
                <b-list-group-item><span class="bodyHeader">Database Concepts</span></b-list-group-item>
                <b-list-group-item><span class="bodyHeader">Computer Structures </span></b-list-group-item>
                <b-list-group-item><span class="bodyHeader"> Object-Oriented Software Systems</span></b-list-group-item>
                <b-list-group-item><span class="bodyHeader"> Fundamentals and Computer Science</span></b-list-group-item>
            </b-list-group>
        </div> <!--This is the end of Related Course Work -->
    </div>
</template>

<script>
    export default {
        name: "Resume"
    }
</script>

<style scoped>
    .about{
        margin-top: 2em;
        display: flex;
        flex-direction: row;
        background-color: lightgrey;
        justify-content: space-evenly;
    }
    .clubsCourse{
        width:50%;
        margin: 3em;
    }
     .InfoHeader{
         font-weight: bold;
         font-size: 20px;
     }
</style>