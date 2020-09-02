<template>
    <div id="app">
        <h2 class="header">Educational Timeline</h2>
        <Timeline
                :timeline-items="dataTimeline"
                :message-when-no-items="messageWhenNoItems"
                :unique-year="true"
                :show-day-and-month="true"
                order="aces"
        />
    </div>
</template>


<script>
    import Timeline from "timeline-vuejs";

    export default {
        name: "App",
        components: {
            Timeline
        },
        data: () => ({
            messageWhenNoItems: "There arent items",
            dataTimeline: [
                {
                    from: new Date(2018, 7),
                    title: "Entered College (Indiana University)",
                    description:
                      "I began my freshman year at Indiana University. I declared my major as Computer Science"
                },
                {
                    from: new Date(2019, 7),
                    title: "Joined IU Ride Team",
                    description:
                       "This was my first job on campus. Because I could only be a navigator, this taught me how to communicate with others well through teammate work with the driver as well as phone calls with customers. I developed a system between the driver and navigator" +
                        " in order to be more efficient."
                },
                {
                    from: new Date(2019, 8, 4),
                    title: "Joined Asian American Association Club",
                    showDayAndMonth: true,
                    description:
                        "Joined AAA and proceeded to meet other students, do community services, and helped plan events."
                },
                {
                    from: new Date(2020, 2),
                    title: "Became a Leader within Asian American Association",
                    description:
                        "I became a respected member within AAA and I ran for a board position. I had a vision that I wanted to help AAA forge its own path as an organization. I have helped planned many virtual events and have" +
                        " acquired so many skills from this leadership position. Still AAA has a long way to go, but it eventually achieve its potential with correct leadership. "
                },
                {
                    from: new Date(2022, 4),
                    title: "Expected Graduation Date",
                    description:
                        "I plan to graduate in May of 2022 with a B.S in Computer Science and a minor in Informatics. I want to become a software engineer for a top 50 fortune 500 company and eventually for FAANG."
                }
            ]
        })
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .header{
        border-bottom: 2px solid #2c3e50;
        margin-top: 1em;
    }
</style>
