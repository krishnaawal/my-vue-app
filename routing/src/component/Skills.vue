<template>
    <h2 class="skills-title">My Skills</h2>
    <div class="wrap">
        <div class="skill-card" v-for="(skill, index) in skills" :key="index">
            <h2>{{ skill.title }}</h2>
            <span>{{ skill.category }}</span>
            <span>{{ skill.level }}</span>
            <p>{{ skill.description }}</p>
        </div>
    </div>

</template>

<script>
    // v-for use 
export default {
    data() {
        return {
            skills: [
                {
                    title: 'JavaScript',
                    category: 'Programming Language',
                    level: 'Advanced',
                    description: 'Proficient in JavaScript for building dynamic web applications.'
                },
                {
                    title: 'Vue.js',
                    category: 'Frontend Framework',
                    level: 'Intermediate',
                    description: 'Experience in developing single-page applications using Vue.js.'
                },
                {
                    title: 'HTML & CSS',
                    category: 'Web Development',
                    level: 'Advanced',
                    description: 'Strong skills in creating responsive and accessible web designs.'
                }
            ]
        }
    }
}
</script>
<style scoped>
.skill-card {
    border: 2px solid rgb(72, 68, 68);
    width: 300px;
    border-radius: 20px;
    padding: 20px;
}
.wrap {
    display: flex;
    gap: 30px;
    margin: 40px 40px 0px 40px;
    padding-bottom: 60px;
}
.skills-title {
    font-size: 36px;
    color: #2c3e50;
    margin-top: 0%;
    padding-top: 2%;
    margin-left: 40px;
}
</style>
