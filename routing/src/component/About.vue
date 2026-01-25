<script setup>
    // import bio component 
import bio from './bio.vue';

</script>
<template>
    <div class="head">
        <img class="pp" src="./image/porfile.png" alt="profile">
        <h1 class="title">Krishna Rawal</h1>
    </div>
    <div>
        <!-- component binding -->
        <bio />
    </div>
</template>
<style scoped>
.head {
    display: flex;
    align-items: center;
}

.pp {
    width: 200px;
    height: auto;
    margin-left: 3%;
    margin-top: 2%;
}

.title {
    font-size: 36px;
    color: #2c3e50;
    margin-left: 3%;
    margin-top: 0%;
    padding-top: 2%;
    text-align: center;
}
</style>