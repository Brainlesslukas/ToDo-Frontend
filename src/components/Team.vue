<template>
  <div class="px-10 pt-16 pb-10">
    <h1 class="flex justify-center text-center text-4xl font-bold">
      The&nbsp;<span class="text-green-500 font-bold">Taskify&nbsp;</span>Crew
    </h1>
    <div class="flex space-x-28 justify-center mt-10">
      <div class="bg-white text-center p-4 rounded-md border-2 border-green-500 flex flex-col justify-between items-center">
        <h2 class="text-3xl font-semibold text-black">Lukas</h2>
        <img src="@/assets/brainlesslukas.png" alt="brainlessluka's PFP" class="rounded-full h-32 w-32 border-2 border-blue-500 m-2">
        <h3 class="mt-3 text-gray-600 text-sm font-medium">Frontend & Backend Developer of Taskify</h3>
        <div class="font-medium text-sm flex items-center space-x-2 pt-3">
          <i class="fa-solid fa-envelope text-green-500"></i>
          <p class="text-green-500">info@brainlesslukas.xyz</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Team'
  }
</script>