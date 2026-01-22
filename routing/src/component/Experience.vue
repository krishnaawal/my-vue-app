<script setup>
// this is used to import ExperienceCard component
import ExperienceCard from './ExperienceCard.vue';
const experienceData = [
    {
        title: 'Software Engineer',
        description: 'Developed web applications using Vue.js and Node.js.',
        year: '2020 - Present'
    },
    {
        title: 'Frontend Developer',
        description: 'Created responsive UI components with HTML, CSS, and JavaScript.',
        year: '2018 - 2020'
    },
    {
        title: 'Intern',
        description: 'Assisted in the development of internal tools and documentation.',
        year: '2017 - 2018'
    }
];
</script>
<template style="margin-top: 0%;">
    <h1>this is experience page</h1>
    <!-- this is used to show the ExperienceCard page -->
    <ExperienceCard v-for="experience in experienceData" 
    :key="experience.title" 
    :title="experience.title" 
    :description="experience.description" 
    :year="experience.year"/>
</template>
<style scoped>
   
h1{
margin-left: 25px; 
margin-top: 0%;
padding-top: 30px;
}
</style>
