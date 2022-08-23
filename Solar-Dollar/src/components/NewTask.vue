<template>
  <div>
    <!-- Status Message -->
    <div v-show="errMessage || errMessageBool">
      <p>{{ errMessage }}</p>
      <p>{{ errMessageBool }}</p>
    </div>

    <!-- Create -->
    <p>Add a new Task</p>
    <!-- Form -->
    <!-- <form @submit.prevent="$emit('taskList', taskName)"> -->
    <div>
      <input type="text"
        v-model="taskName"
        placeholder="Add a Task Title"
        required
      />
      <input
        type="text"
        v-model="taskDescription"
        placeholder="Add a Task Description"
      />
      <button @click.prevent="addTask2">Add</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useTaskStore } from "../stores/task";
import { storeToRefs } from "pinia";


// constant to save a variable that define the custom event that will be emitted to the homeView
const emit = defineEmits(['childNewTask'])

// constant to save a variable that holds the value of the title input field of the new task

const taskName = ref("");

// constant to save a variable that holds the value of the description input field of the new task

const taskDescription = ref("");

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty

const errMessageBool = false;

// const constant to save a variable that holds the value of the error message

const errMessage = ref(null);

// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.

const addTask2 = async () => {
  if (taskName.value === "") {
    errorMsg.value = "This looks empty";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  } else {
    emit('childNewTask', taskName.value, taskDescription.value);
    taskName.value = null;
    taskDescription.value = null;
  }
};


</script>

<style></style>
