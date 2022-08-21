<template>
    <div>
        <form @submit.prevent="signUp">
          <label for="email"></label>
          <input type="email" v-model="email" name="email" placeholder="dave@mail.com">
          <label for="password"></label>
          <input type="password" v-model="password" name="password" placeholder="***********">
          <label for="confirm-password"></label>
          <input type="password" v-model="confirmPassword" name="confirm-password" placeholder="***********">
          <button type="submit">Sign Up</button>
        </form>
        <div>Sign Up</div>
        <PersonalRouter :route="route" :buttonText="buttonText" />
        <p v-show="passwordsNotSame">The passwords are not the same</p>
        <p>Keep calm and code on!</p>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/login";
const buttonText = "Test the Sign In Route";

// Input Fields
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// Error Message
const errorMsg = ref("");

// define variable for it passwords match
var passwordsNotSame = false;


//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

// Show hide confrimPassword variable
const hidePassword = ref(true);

// Router to push user once SignedUp to Log In
const redirect = useRouter();

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
const signUp = async () => {
    if (password.value === confirmPassword.value) {
        try {
          // calls the user store and send the users info to backend to logIn
          await useUserStore().signUp(email.value, password.value);
          // redirects user to the loginView
          redirect.push({ path: "/auth/login" });
        } catch (error) {
          // displays error message
          errorMsg.value = `Error: ${error.message}`;
          // hides error message
          setTimeout(() => {
            errorMsg.value = null;
          }, 5000);
        }
    }
    else {
        passwordsNotSame = true;
        console.log(passwordsNotSame);
        return passwordsNotSame;
    }
};
</script>

<style></style>
