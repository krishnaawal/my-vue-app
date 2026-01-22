<!-- in this page i have used props to pass the data from Experience.vue to ExperienceCard.vue (parents component to child component) -->
<script>
export default {
    props: ['title', 'description', 'year']
}
</script>
<template>
    <div class="experience-card">
        <h2>{{ title }}</h2>
       <span>{{ description }}</span><br>
       <span>{{ year }}</span>
    </div>
</template>

<style scoped>
.experience-card {
    border: 2px solid rgb(72, 68, 68);
    width: 400px;
    border-radius: 20px;
    padding: 20px;
    margin: 20px;
}
</style>