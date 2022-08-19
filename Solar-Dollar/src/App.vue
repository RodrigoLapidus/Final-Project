<template>
  <div>
    <Navbar />
    <Menu />
    <SignUp />
    <SignIn />
    <SingOut />
    <button>Here</button>
  </div>
  

</template>

<script setup>
import { ref, computed } from 'vue';
import Navbar from './components/Navbar.vue';
import Menu from './components/Menu.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import SignOut from './components/SignOut.vue';
import { RouterView } from 'vue-router';


// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++
};

<router-view />
</script>

<style>

</style>