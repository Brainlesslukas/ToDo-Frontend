<template>
  <div class="bg-[#0D1B12] px-10 pt-16 pb-10 border-t-[1px] border-b-[1px] border-green-700 font-raleway">
    <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-28 justify-center items-center">

      <!-- Total Users -->
      <div class="bg-[#0F1E16] bg-opacity-90 w-64 h-64 text-center p-4 rounded-md border-2 border-green-600 flex flex-col justify-between items-center transform hover:scale-110 transition-transform duration-300">
        <h2 class="text-3xl font-light text-white">Total Users</h2>
        <h1 class="text-green-400 flex-1 flex items-center justify-center text-4xl font-bold">
          <span v-if="isLoading">Loading...</span>
          <span v-else-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
          <span v-else>{{ users }}</span>
        </h1>
        <h3 class="mt-auto text-gray-400 text-m font-light">Total number of active users currently registered on the platform.</h3>
      </div>

      <!-- Total ToDos -->
      <div class="bg-[#0F1E16] bg-opacity-90 w-64 h-64 text-center p-4 rounded-md border-2 border-green-600 flex flex-col justify-between items-center transform hover:scale-110 transition-transform duration-300">
        <h2 class="text-3xl font-light text-white">Total ToDos</h2>
        <h1 class="text-green-400 flex-1 flex items-center justify-center text-4xl font-bold">
          <span v-if="isLoading">Loading...</span>
          <span v-else-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
          <span v-else>{{ todos }}</span>
        </h1>
        <h3 class="mt-auto text-gray-400 text-m font-light">Total number of ToDos stored in the database.</h3>
      </div>

      <!-- Total Uptime -->
      <div class="bg-[#0F1E16] bg-opacity-90 w-64 h-64 text-center p-4 rounded-md border-2 border-green-600 flex flex-col justify-between items-center transform hover:scale-110 transition-transform duration-300">
        <h2 class="text-3xl font-light text-white">Total Uptime</h2>
        <h1 class="text-green-400 flex-1 flex items-center justify-center text-4xl font-bold">
          <span v-if="isLoading">Loading...</span>
          <span v-else-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
          <span v-else>{{ formattedUptime }}</span>
        </h1>
        <h3 class="mt-auto text-gray-400 text-m font-light">Total duration the website has been running continuously.</h3>
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
      uptimeSeconds: 0,
      errorMessage: '',
      isLoading: false,
      interval: null,
    };
  },

  computed: {
    formattedUptime() {
      let seconds = this.uptimeSeconds;
      let days = Math.floor(seconds / 86400);
      seconds %= 86400;
      let hours = Math.floor(seconds / 3600);
      seconds %= 3600;
      let minutes = Math.floor(seconds / 60);
      seconds %= 60;

      let parts = [];
      if (days > 0) parts.push(`${days}d`);
      if (hours > 0) parts.push(`${hours}h`);
      if (minutes > 0) parts.push(`${minutes}m`);
      parts.push(`${seconds}s`);

      return parts.join(' ');
    }
  },

  methods: {
    async getData() {
      this.errorMessage = '';
      this.isLoading = true;

      try {
        const responseUptime = await axios.get('https://api.brainlesslukas.xyz/stats/portainer-uptime');
        const responseTodos = await axios.get('https://api.brainlesslukas.xyz/stats/count-todos');
        const responseUsers = await axios.get('https://api.brainlesslukas.xyz/stats/count-users');

        this.todos = responseTodos.data;
        this.users = responseUsers.data;

        if (responseUptime.data.uptime) {
          this.uptimeSeconds =
              responseUptime.data.uptime.days * 86400 +
              responseUptime.data.uptime.hours * 3600 +
              responseUptime.data.uptime.minutes * 60 +
              responseUptime.data.uptime.seconds;
        } else {
          this.errorMessage = 'Unknown uptime';
        }

      } catch (error) {
        this.errorMessage = error.response?.data?.message || 'Failed to fetch data';
      } finally {
        this.isLoading = false;
      }
    },

    startUptimeCounter() {
      this.interval = setInterval(() => {
        this.uptimeSeconds++;
      }, 1000);
    }
  },

  mounted() {
    this.getData().then(() => this.startUptimeCounter());
  },

  beforeUnmount() {
    clearInterval(this.interval);
  }
};
</script>
