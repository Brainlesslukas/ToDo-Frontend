<template>
  <div>
    <input v-model="titel" type="text" placeholder="Please enter the Title of the ToDo..." /> <br>

    <input v-model="description" type="text" placeholder="Here you can enter the Description of the ToDo..." /> <br>

    <button @click="sendToDo">Absenden</button>

    <p v-if="responseMessage">{{ responseMessage }}</p>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<script>
  import axiosInstance from "@/utils/axiosInstance";

  export default {
    name: 'ToDoCreateForm',

    data() {
      return {
        titel: '',
        description: '',
        responseMessage: '',
        errorMessage: '',
      };
    },

    methods: {
      sendToDo() {
        this.errorMessage = '';

        axiosInstance.post('https://api.brainlesslukas.xyz/todo/create', {
          todo_title: this.titel,
          todo_description: this.description
        })
            .then(response => {
              this.responseMessage = 'Deine ToDo wurde Erfolgreich hochgeladen!';
            })
            .catch(error => {
              this.errorMessage = 'Fehler beim Login: ' + (error.response?.data?.message || error.message);
            });
      }
    }
  }
</script>