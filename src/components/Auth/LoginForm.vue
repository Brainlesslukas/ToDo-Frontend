<template>
  <div class="flex flex-col justify-center px-6 sm:px-8 md:px-12 w-full sm:w-96 md:w-80 lg:w-96 py-5 bg-white rounded-lg shadow-xl">
    <h1 class="text-5xl font-bold flex justify-center items-center text-black">Login</h1>

    <div class="mt-8 space-y-2">
      <p class="text-lg text-black font-medium">Email</p>
      <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="bg-gray-300 w-full h-10 text-lg rounded-sm border-2 p-2 pl-4 border-blue-500 focus:border-blue-500 focus:ring-0 outline-none"
      />
    </div>

    <div class="mt-4 space-y-2">
      <p class="text-lg text-black font-medium">Password</p>
      <input
          v-model="password"
          type="password"
          placeholder="Enter your password"
          class="bg-gray-300 w-full h-10 text-lg rounded-sm border-2 p-2 pl-4 border-blue-500 focus:border-blue-500 focus:ring-0 outline-none"
      />
    </div>

    <div class="flex justify-center items-center">
      <button
          @click="login"
          :disabled="isLoading"
          class="text-lg font-medium mt-10 bg-blue-500 w-28 h-10 rounded-md flex justify-center items-center hover:bg-blue-400 cursor-pointer"
      >
        <span v-if="!isLoading">Absenden</span>
        <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"></path>
        </svg>
      </button>
    </div>

    <div class="mt-4 flex justify-center items-center font-medium text-gray-500">
      <p>Don't have an account? <span class="text-blue-500 hover:underline"><a href="/register">Register</a></span></p>
    </div>

    <div class="mt-2 flex justify-center items-center">
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
        const response = await axios.post('https://api.brainlesslukas.xyz/auth/login', {
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
