<template>
  <Transition
      enter="transition-opacity duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-300"
      leave-from="opacity-100"
      leave-to="opacity-0"
  >
    <div
        v-if="show"
        class="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-2 bg-blue-50 border-l-4 border-green-500 rounded shadow-lg z-50 flex items-center space-x-4">
      <p class="text-blue-700 text-center font-raleway font-semibold">This Website is still under Construction!</p>
      <button @click="show = false" class="text-green-500 hover:bg-gray-300 p-1 rounded px-2">
        <i class="fa-solid fa-xmark text-3xl"></i>
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const show = ref(true);
</script>