<template>
  <div class="flex justify-between items-center py-5">
    <div class="ml-16 font-bold text-4xl flex items-center">
      <a href="#">Taskify</a>
      <img src="@/assets/Logo.webp" class="h-8 mr-2">
    </div>

    <div class="flex space-x-4 mr-16 font-semibold text-lg">
      <a href="#" class="hover:bg-green-400 p-2 rounded-sm">Home</a>
      <a href="#" class="hover:bg-green-400 p-2 rounded-sm">ToDos</a>
      <a href="#" class="hover:bg-green-400 p-2 rounded-sm">Login</a>
      <a href="#" class="hover:bg-green-400 p-2 rounded-sm">Register</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>