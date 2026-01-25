<template>
    <div class="contant">
        <h2 class="skills-title">My Skills</h2>
    <div class="wrap">
        <div class="skill-card" v-for="(skill, index) in skills" :key="index">
            <h2>{{ skill.title }}</h2>
            <span>{{ skill.category }}</span>
            <span>{{ skill.level }}</span>
            <p>{{ skill.description }}</p>
        </div>
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
                },
                {
                    title: 'Front End',
                    category: 'Web Development',
                    level: 'Advanced',
                    description: 'Strong skills in creating responsive and accessible web designs.'
                },
                {
                    title: 'Wordpress ',
                    category: 'Web Development',
                    level: 'Advanced',
                    description: 'Strong skills in creating responsive and accessible web designs.'
                },
                {
                    title: 'C & C++',
                    category: 'Programming Language',
                    level: 'Intermediate',
                    description: 'Experience in developing applications using C and C++.'
                }
            ]
        }
    }
}
</script>
<style scoped>
.contant{
    justify-content: center;
    display: flex;
    flex-direction: column;
}
.skill-card {
    /* border: 2px solid rgb(72, 68, 68); */
    width: 350px;
    border-radius: 20px;
    padding: 25px;
    box-shadow: inset 0px 0px 20px 5px #7c7777;
}
.wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    margin: 40px 40px 0px 40px;
    padding-bottom: 60px;
}
.skill-card:hover {
    box-shadow: 0px 0px 10px 2px #7c7777;
}
.skills-title {
    font-size: 36px;
    color: #2c3e50;
    margin-top: 0%;
    padding-top: 2%;
    margin-left: 40px;
}
</style>
