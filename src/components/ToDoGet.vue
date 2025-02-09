<template>
  <div>
    <div v-if="isLoading">Lädt...</div>

    <ul v-if="!isLoading">
      <li v-for="todo in todos" :key="todo.id">
        <h3>Titel:</h3>
        {{ todo.todo_title }}
        <h4>Description:</h4>
        {{ todo.todo_description }}
      </li>
    </ul>

  </div>

  <p v-if="responseMessage">{{ responseMessage }}</p>
  <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
</template>

<script>
import axiosInstance from "@/utils/axiosInstance";

  export default {
    name: 'ToDoGet',

    data() {
      return {
        apiData: {},
        isLoading: true,
      };
    },

    mounted() {
      axiosInstance.get('https://api.brainlesslukas.xyz/todo')
          .then(response => {
            this.todos = response.data;
            this.isLoading = false;
          })
          .catch(error => {
            console.error("Es gab einen Fehler beim Abrufen der Daten:", error);
            this.isLoading = false;
          });
    }
  }
</script>