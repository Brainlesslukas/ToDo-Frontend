<template>
  <div class="bg-white px-10 pt-16 pb-10">
    <div class="flex space-x-28 justify-center">

      <!-- Total Users -->
      <div class="bg-green-200 w-64 h-64 text-center p-4 rounded-md border-2 border-green-500 flex flex-col justify-between items-center">
        <h2 class="text-3xl font-semibold text-black">Total Users</h2>
        <h1 class="text-green-500 flex-1 flex items-center justify-center text-4xl font-extrabold">
          <span v-if="isLoading">Loading...</span>
          <span v-else-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
          <span v-else>{{ users }}</span>
        </h1>
        <h3 class="mt-auto text-gray-600 text-sm font-medium">Total number of active users currently registered on the platform.</h3>
      </div>

      <!-- Total ToDos -->
      <div class="bg-green-200 w-64 h-64 text-center p-4 rounded-md border-2 border-green-500 flex flex-col justify-between items-center">
        <h2 class="text-3xl font-semibold text-black">Total ToDos</h2>
        <h1 class="text-green-500 flex-1 flex items-center justify-center text-4xl font-extrabold">
          <span v-if="isLoading">Loading...</span>
          <span v-else-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
          <span v-else>{{ todos }}</span>
        </h1>
        <h3 class="mt-auto text-gray-600 text-sm font-medium">Total number of ToDos stored in the database.</h3>
      </div>

      <!-- Total Uptime -->
      <div class="bg-green-200 w-64 h-64 text-center p-4 rounded-md border-2 border-green-500 flex flex-col justify-between items-center">
        <h2 class="text-3xl font-semibold text-black">Total Uptime</h2>
        <h1 class="text-green-500 flex-1 flex items-center justify-center text-4xl font-extrabold">
          <span v-if="isLoading">Loading...</span>
          <span v-else-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
          <span v-else>{{ formattedUptime }}</span>
        </h1>
        <h3 class="mt-auto text-gray-600 text-sm font-medium">Total duration the website has been running continuously.</h3>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ToDoStats',

  data() {
    return {
      todos: 0,
      users: 0,
      formattedUptime: '',
      errorMessage: '',
      isLoading: false,
      apiToken: process.env.VUE_APP_ADMIN_PASSWORD,
    };
  },

  methods: {
    async getData() {
      this.errorMessage = '';
      this.isLoading = true;
      this.formattedUptime = '';

      try {
        const responseUptime = await axios.get('https://api.brainlesslukas.xyz/stats/portainer-uptime', {
          headers: {
            'Authorization': `Bearer ${this.apiToken}`
          }
        });
        const responseTodos = await axios.get('https://api.brainlesslukas.xyz/stats/count-todos', {
          headers: {
            'Authorization': `Bearer ${this.apiToken}`
          }
        });
        const responseUsers = await axios.get('https://api.brainlesslukas.xyz/stats/count-users', {
          headers: {
            'Authorization': `Bearer ${this.apiToken}`
          }
        });

        const uptime = responseUptime.data.uptime;

        const todos = responseTodos.data;
        this.todos = todos;
        
        const users = responseUsers.data;
        this.users = users;

        if (uptime) {
          this.formattedUptime = this.formatUptime(uptime);
        } else {
          this.formattedUptime = 'Unknown';
        }

      } catch (error) {
        this.errorMessage = error.response?.data?.message || 'Failed to fetch data';
      } finally {
        this.isLoading = false;
      }
    },

    formatUptime(uptime) {
      let parts = [];
      if (uptime.days > 0) parts.push(`${uptime.days}d`);
      if (uptime.hours > 0) parts.push(`${uptime.hours}h`);
      if (uptime.minutes > 0) parts.push(`${uptime.minutes}m`);
      if (uptime.seconds > 0) parts.push(`${uptime.seconds}s`);

      return parts.length > 0 ? parts.join(' ') : '0s';
    }
  },

  mounted() {
    this.getData();
    console.log(this.apiToken);
  }
};
</script>