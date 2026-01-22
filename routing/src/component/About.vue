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
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus tempora mollitia optio quas libero asperiores
        incidunt dolorem, soluta at molestias adipisci, ipsam eius harum nostrum magni tempore! Neque omnis, enim sed
        ipsum possimus quisquam pariatur, dolor cumque repellat veniam voluptatum aliquam animi dolorem ab, labore
        iusto. Explicabo commodi, officiis quod minima neque amet architecto, officia vitae facere beatae perspiciatis
        ipsum culpa repellendus suscipit eius unde, dolorem earum perferendis nulla molestiae. Molestias culpa
        consequatur porro veniam, repellendus similique, eveniet assumenda fuga dolores sunt voluptate delectus
        voluptates expedita quidem temporibus. Quo dolores dolorum alias. Veritatis placeat laudantium assumenda nam
        enim est iste.</p>
</template>
<style>
.head {
    display: flex;
    align-items: center;
}

.pp {
    width: 150px;
    height: auto;
    border-radius: 60%;
    margin-left: 3%;
    margin-top: 2%;
}

.title {
    font-size: 36px;
    color: #2c3e50;
    margin-left: 3%;
    margin-top: 0%;
    padding-top: 2%;
}
p {
    font-size: 18px;
    line-height: 1.6;
    color: #333;
    margin: 3%;
    text-align: justify;
}
</style>