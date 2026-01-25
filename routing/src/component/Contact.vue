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
    <div class="container">
        <div class="form">
            <h1 class="reach">Contact Me</h1><br>
            <form class="reachoutform" @submit="handleSumbmit">
                <input type="text" v-model="name" placeholder="Your Name">
                <input type="email" v-model="email" placeholder="Your Email">
                <textarea id="textarea" v-model="message" placeholder="Your Message"></textarea>
                <p v-if="error" style="color: red;"> {{ error }}</p>
                <p v-if="successMessage" style="color: green;"> {{ successMessage }}</p>
                <!-- this button will be used to check email validity -->
                <button type="submit">Submit</button>
            </form>
        </div>
        <div class="location">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17393.539772201075!2d85.32527349407789!3d27.717727907970936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1769319609845!5m2!1sen!2snp"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>
<style scoped>
.location iframe {
    border-radius: 20px;
    margin: 40px 20px 20px 20px;
}
.container {
    background-color: #E8E2D8;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;
}
.reachoutform {
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 35px;
    margin: 0px 20px 20px 20px;
    padding: 40px;
    border-radius: 20px;
}
.reachoutform textarea{
    height: 100px;
    resize: none
}
.reachoutform input,
.reachoutform textarea,
.reachoutform button {
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
}
.reachoutform button {
    background-color: #4CAF50;
    color: white;
}

.reach {
    padding: 20px 0px 0px 0px;
    text-align: center;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>