<template>
  <div class="bg-white px-10 pt-16 pb-10">
    <div class="flex space-x-28 justify-center">

      <div class="bg-green-200 w-64 h-64 text-center p-4 rounded-md border-2 border-green-500 flex flex-col justify-between items-center">
        <h2 class="text-3xl font-semibold text-black">Total Users</h2>
        <h1 class=" text-green-500 flex-1 flex items-center justify-center text-4xl font-extrabold">64</h1>
        <h3 class="mt-auto text-gray-600 text-sm font-medium">Total number of active users currently registered on the platform.</h3>
      </div>

      <div class="bg-green-200 w-64 h-64 text-center p-4 rounded-md border-2 border-green-500 flex flex-col justify-between items-center">
        <h2 class="text-3xl font-semibold text-black">Total ToDos</h2>
        <h1 class=" text-green-500 flex-1 flex items-center justify-center text-4xl font-extrabold">64</h1>
        <h3 class="mt-auto text-gray-600 text-sm font-medium">Total number of ToDos stored in the database.</h3>
      </div>

      <div class="bg-green-200 w-64 h-64 text-center p-4 rounded-md border-2 border-green-500 flex flex-col justify-between items-center">
        <h2 class="text-3xl font-semibold text-black">Total Uptime</h2>
        <h1 class=" text-green-500 flex-1 flex items-center justify-center text-4xl font-extrabold">64</h1>
        <h3 class="mt-auto text-gray-600 text-sm font-medium">Total duration the website has been running continuously.</h3>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoStats'
}
</script>
