<template>
  <div class="flex flex-col justify-center px-6 sm:px-8 md:px-12 w-full sm:w-96 md:w-80 lg:w-96 py-5 bg-[#0D1B12] rounded-lg shadow-xl font-raleway border-[1px] border-green-700">

    <div class="text-5xl font-light flex justify-center items-center text-white">
      <h1>Login</h1>
    </div>

    <div class="mt-8 space-y-2">
      <p class="text-lg text-white font-light">Email</p>
      <input
          v-model="email"
          type="email"
          placeholder="tim@busy.com"
          class="bg-gray-300 w-full h-10 text-lg rounded-sm border-2 p-2 pl-4 border-green-500 focus:border-green-500 focus:ring-0 outline-none"
      />
    </div>

    <div class="mt-4 space-y-2">
      <p class="text-lg text-white font-light">Password</p>
      <input
          v-model="password"
          type="password"
          placeholder="Password..."
          class="bg-gray-300 w-full h-10 text-lg rounded-sm border-2 p-2 pl-4 border-green-500 focus:border-green-500 focus:ring-0 outline-none"
      />
    </div>

    <div class="flex justify-center items-center text-white">
      <button
          @click="login"
          :disabled="isLoading"
          class="text-lg font-medium mt-10 bg-green-500 w-28 h-10 rounded-full flex justify-center items-center hover:bg-green-400 cursor-pointer"
      >
        <span v-if="!isLoading">Send</span>
        <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"></path>
        </svg>
      </button>
    </div>

    <div class="mt-4 flex justify-center items-center font-light text-gray-500">
      <p>Don't have an account? <span class="text-green-500 hover:underline"><a href="/register">Register</a></span></p>
    </div>

    <div class="mt-2 flex justify-center items-center font-light">
      <p v-if="responseMessage" class="mt-4 text-green-500">{{ responseMessage }}</p>
      <p v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'LoginForm',
  data() {
    return {
      apiUrl: process.env.VUE_APP_API_DOMAIN,
      email: '',
      password: '',
      responseMessage: '',
      errorMessage: '',
      isLoading: false
    };
  },
  methods: {
    async login() {
      this.errorMessage = '';
      this.responseMessage = '';
      this.isLoading = true;

      try {
        const response = await axios.post(`${this.apiUrl}/auth/login`, {
          email: this.email,
          password: this.password
        });

        localStorage.setItem('jwtToken', response.data.token);
        this.responseMessage = 'Successfully Logged in!';
      } catch (error) {
        this.errorMessage = 'Error: ' + (error.response?.data?.message || error.message);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>
