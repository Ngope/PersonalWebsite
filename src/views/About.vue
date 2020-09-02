<template>
  <div>
    <div class="EducationTimeline">
      <Timeline/>
    </div>
    <Resume/>
  </div>
</template>
<script>

  import Resume from "@/components/Resume.vue";
  import Timeline from "../components/Timeline";

export default {
  name: "about",
  components: {
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
