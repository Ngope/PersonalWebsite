<template>
  <div class="home">
    <aboutme />
          <div data-aos="fade-up"
             data-aos-duration="1000">
            <div class="EducationTimeline">
             <Timeline/>
            </div>
        </div>
       <div data-aos="fade-up"
         data-aos-duration="1000">
          <Resume/>
        </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import aboutme from "@/components/aboutme.vue";
import Resume from "@/components/Resume.vue";
import Timeline from "../components/Timeline";

export default {
  name: "home",
  components: {
    HelloWorld,
    aboutme,
    Timeline,
    Resume
  }
};
</script>

<style>
  .EducationTimeline{
    display: flex;
    justify-content: center;
  }
</style>