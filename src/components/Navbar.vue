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
      <img src="@/assets/Logo.webp" class="h-8 mr-2">
    </div>

    <div v-if="state.isAuthenticated" class="flex space-x-12 mr-16 font-extralight text-lg font-raleway text-white hidden md:block">
      <h1>Logged IN :)</h1>
    </div>

    <div v-else>
      <div class="flex space-x-12 mr-16 font-extralight text-lg font-raleway text-white hidden md:block">
        <a href="https://taskify.brainlesslukas.xyz/login" class="relative inline-block pb-1 text-lg after:block after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:left-0 hover:after:w-full">
          Login
        </a>
        <a href="https://taskify.brainlesslukas.xyz/register" class="relative inline-block pb-1 text-lg after:block after:w-0 nacher:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:left-0 hover:after:w-full">
          Register
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { checkAuth } from "@/services/authService";

const state = reactive({
  isAuthenticated: false,
  user: null,
});

console.log("Skript wird geladen");

onMounted(async () => {
  console.log("onMounted Hook gestartet");
  const userData = await checkAuth();
  console.log("Benutzerdaten empfangen:", userData);

  if (userData) {
    state.isAuthenticated = true;
    state.user = userData;
    console.log("Benutzer ist authentifiziert:", state.user);
  } else {
    state.isAuthenticated = false;
    console.log("Benutzer ist nicht authentifiziert");
  }
});
</script>