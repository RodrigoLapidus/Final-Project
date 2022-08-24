<template>
  <div>
    <div>
      <p>{{ task.title }}</p>
      <p>{{ task.description }}</p>
      <button @click="completeTask2(task.id, task.is_complete)" v-show="!task.is_complete" style="background-color: lightblue">Completed?</button>
      <button @click="completeTask2(task.id, task.is_complete)" v-show="task.is_complete" style="background-color: lightblue">Completed!</button>
      <button @click="toggleOptions" v-show="!toggle" style="background-color: lightgoldenrodyellow">Edit</button>
        <input v-show="toggle" type="text" v-model="newTitle" />
        <input v-show="toggle" type="text" v-model="newDescription" />
        <button @click="toggleTask2" v-show="toggle">edit task</button>
        <button @click="toggleOptions" v-show="toggle">Edit</button>
      <button @click="removeTask2(task.id)" style="background-color: lightcoral">Delete</button>
    </div>
    <!-- <div v-if="printThis">
      Aquí hay que añadir insertar de forma añadida las nuevas tasks 
      <p :taskN="taskName">{{newTask}}</p>
      <p :taskD="taskDescription">{{newTaskDescription}}</p>-->
      
    <!--<button @click="tasks">Click to debug</button>-->
  </div>
</template>

<script setup>
  // import { defineProps } from 'vue';
  import { ref, computed } from "vue";
  import PersonalRouter from "./PersonalRouter.vue";
  import { supabase } from "../supabase";
  import { useRouter } from "vue-router";
  import { useTaskStore } from "../stores/task";
  import { storeToRefs } from "pinia";

  const newTitle = ref("");
  const newDescription = ref("");
  const toggle = ref(false);

  const props = defineProps (['task', 'toggle']);


  const emit = defineEmits (['childEditTask', 'childCompleteTask', 'childDeleteTask']);

  const removeTask2 = async (id) => {
    emit('childDeleteTask', id);
  };

  function toggleOptions() {
    toggle.value=!toggle.value;
    newTitle.value = props.task.title;
    newDescription.value = props.task.description
  };

  const toggleTask2 = async () => {
    const newValues = {
      newTitle: newTitle.value,
      newDecription: newDescription.value,
      oldIdValue: props.task
    }
    emit('childEditTask',  newValues);
    newTitle.value = "",
    newDescription.value = ""
  };

  const completeTask2 = async (id, completedBool) => {
    emit ('childCompleteTask', id, completedBool);
  }

/*
  const errorMsg = ref("");

  const arrayTask = ref([]);

  const arrayTaskLoaded = ref(null);


  const tasks = async () => {

    arrayTask.value = await useTaskStore().fetchTasks();
    
  };

  tasks();
  */

// const emit = defineEmits([
//   ENTER-EMITS-HERE
// ])

// const props = defineProps(["ENTER-PROP-HERE"]);


</script>

<style></style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or like an object, up to you.
2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error, a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit the new task detail or details[this is in reference of the task title and the task description].
3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the status[completed, not complted] of the taskItem.
4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean empty variable.
5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the inputField will be used here to save the value as a prop on this function.
6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.
7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional that first checks if the value of the task [either title and description or just title] is empty which if true it runs the function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field to an empty string to clear it from the ui. 
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
