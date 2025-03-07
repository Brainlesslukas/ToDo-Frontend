<template>
  <div class="flex justify-between items-center py-5 border-b-[1px] border-white">
    <div class="flex space-x-12 ml-16 font-extralight text-lg font-raleway text-white hidden md:block">
      <a href="https://taskify.brainlesslukas.xyz" class="relative inline-block pb-1 text-lg after:block after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:left-0 hover:after:w-full">
        Home
      </a>
      <a href="https://taskify.brainlesslukas.xyz/todo" class="relative inline-block pb-1 text-lg after:block after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:left-0 hover:after:w-full">
        ToDo's
      </a>
    </div>

    <div class="text-4xl flex items-center font-raleway text-white ml-8">
      <a class="font-light" href="https://taskify.brainlesslukas.xyz">Taskify</a>
      <img src="../../assets/Logo.webp" class="h-8 mr-2">
    </div>

    <div v-if="state.isAuthenticated" class="flex items-center space-x-4 mr-16 font-extralight text-lg font-raleway text-white hidden md:flex p-2 rounded-full transition-colors duration-300 hover:bg-[#0F1E16]">
    <div class="relative">
        <button class="flex items-center space-x-2" @click="toggleDropdown">
          <span class="text-lg"><i class="fa-solid fa-caret-down"></i> {{ state.username }}</span>
          <img :src="state.profilePicture" class="w-8 h-8 rounded-full transition-all duration-300 ease-in-out hover:ring-2 hover:ring-white" alt="User Avatar">
        </button>

        <transition name="fade">
          <div v-if="isDropdownOpen" class="absolute right-0 bg-[#0F1E16] text-white rounded-md w-40 mt-4 shadow-lg transition-all duration-300 ease-in-out border border-green-500">
            <a href="/profile" class="block py-2 px-4 hover:bg-[#1a2b21] rounded-md">Profile</a>
            <a href="/settings" class="block py-2 px-4 hover:bg-[#1a2b21] rounded-md">Settings</a>
            <a href="/logout" class="block py-2 px-4 hover:bg-[#1a2b21] rounded-md">Logout</a>
          </div>
        </transition>
      </div>
    </div>

    <div v-else>
      <div class="flex space-x-12 mr-16 font-extralight text-lg font-raleway text-white hidden md:block">
        <a href="https://taskify.brainlesslukas.xyz/login" class="relative inline-block pb-1 text-lg after:block after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:left-0 hover:after:w-full">
          Login
        </a>
        <a href="https://taskify.brainlesslukas.xyz/register" class="relative inline-block pb-1 text-lg after:block after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:left-0 hover:after:w-full">
          Register
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref, onUnmounted } from "vue";
import { checkAuth } from "@/services/authService";
import axiosInstance from "@/utils/axiosInstance";

const state = reactive({
  isAuthenticated: false,
  user: null,
  username: null,
});

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = (event) => {
  if (!event.target.closest('.relative')) {
    isDropdownOpen.value = false;
  }
};

onMounted(async () => {
  const userData = await checkAuth();
  const apiUrl = process.env.VUE_APP_API_DOMAIN;

  if (userData) {
    state.isAuthenticated = true;
    state.user = userData;
  } else {
    state.isAuthenticated = false;
  }

  try {
    const response = await axiosInstance.get(`${apiUrl}/profil`);
    const profilePictureResponse = await axiosInstance.get(`${apiUrl}/profile-picture`, {
      responseType: 'blob' // Falls das Bild als Blob zurückkommt
    });

    state.username = response.data.name;

    // Wenn das Bild als URL zurückkommt
    state.profilePicture = URL.createObjectURL(profilePictureResponse.data);

  } catch (error) {
    console.error("Fehler beim Abrufen der API-Daten:", error);
  }

  document.addEventListener('click', closeDropdown);
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
