<script setup>
import { ref } from 'vue';
const name = ref('');
const email = ref('');
const message = ref('');
const error = ref('');
const successMessage = ref('');

// Email validation pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function handleSumbmit(e) {
    e.preventDefault();
    error.value = '';
    successMessage.value = '';
    
    // Check if all fields are filled
    if (!name.value ||
        !email.value ||
        !message.value) {
        error.value = "all fields are required"
        console.log("Error: all fields are required")
        return
    }
    
    // Check if email is valid
    if (!emailPattern.test(email.value)) {
        error.value = 'Please enter a valid email'
        console.log("Error: Invalid email")
        return
    }
    
    // If all validations pass
    successMessage.value = 'Form successfully submitted'
    console.log({
        status: 'Form successfully submitted',
        data: {
            name: name.value,
            email: email.value,
            message: message.value
        }
    })
    
    // Reset form
    name.value = '';
    email.value = '';
    message.value = '';
}


</script>
<template>
   <div class="form">
     <h1 class="reach">Reach Out to Me</h1>
    <form class="reachoutform" @submit="handleSumbmit">
        <input type="text" v-model="name" placeholder="Your Name">
        <input type="email" v-model="email" placeholder="Your Email">
        <label for="message">Type your message here....</label>
        <textarea id="textarea" v-model="message" placeholder="Your Message"></textarea>
        <p v-if="error" style="color: red;"> {{ error }}</p>
        <p v-if="successMessage" style="color: green;"> {{ successMessage }}</p>
        <!-- this button will be used to check email validity -->
        <button type="submit">Submit</button>
    </form>
   </div>
</template>
<style scoped>
.reachoutform {
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 20px;
    margin: 20px;
    background-color: rgb(109, 154, 149);
    padding: 40px;
    border-radius: 20px;
}
.reachoutform input, .reachoutform textarea, .reachoutform button {
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
}
.reach {
    margin-top: 0%;
    padding: 20px 0px 0px 20px;
}
.form{
    background-color: rgb(197, 192, 192);
    display: flex;
    flex-direction: column;
}
</style>