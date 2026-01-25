<!-- in this page i have used props to pass the data from Experience.vue to ExperienceCard.vue (parents component to child component) -->
<script>
export default {
    props: ['title', 'description', 'year']
}
</script>
<template>
    <div class="car">
        <div class="experience-card">
            <h2>{{ title }}</h2>
            <span>{{ description }}</span><br>
            <span>{{ year }}</span>
        </div>
    </div>
</template>

<style scoped>
.experience-card {
    width: 350px;
    border-radius: 20px;
    padding: 25px;
    box-shadow: inset 0px 0px 20px 5px #7c7777;
}
.car{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   padding: 10px;
}
</style>