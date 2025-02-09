<template>
  <div>
    <div v-if="isLoading">Lädt...</div>
    <h1 v-if="!isLoading">{{ apiData.message }}</h1>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'Test',
    data() {
      return {
        apiData: {},
        isLoading: true,
      };
    },

    mounted() {
      axios.get('https://api.brainlesslukas.xyz')
          .then(response => {
            this.apiData = response.data;
            console.log("API Antwort:", response.data);
            this.isLoading = false;
          })
          .catch(error => {
            console.error("Es gab einen Fehler beim Abrufen der Daten:", error);
            this.isLoading = false;
          });
    }
  }
</script>