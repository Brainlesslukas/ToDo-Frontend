<template>
  <div class="bg-black px-10 pt-16 pb-10 border-t-[1px] border-green-700 overflow-hidden font-raleway">
    <h1 class="flex justify-center text-center text-4xl font-light text-white">
      The&nbsp;<span class="text-green-500">Taskify&nbsp;</span>Crew
    </h1>
    <div class="flex space-x-28 justify-center mt-16">
      <div class="bg-[#1B2A1A] bg-opacity-90 text-center p-4 rounded-md border-2 border-green-600 flex flex-col justify-between items-center  transform hover:scale-110 transition-transform duration-300 pb-8">
        <h2 class="text-3xl font-normal text-white">Lukas</h2>
        <img src="@/assets/brainlesslukas.png" alt="brainlesslukas' PFP" class="rounded-full h-32 w-32 border-2 border-blue-500 m-2">
        <h3 class="mt-3 text-gray-400 text-sm font-light">Frontend & Backend Developer of Taskify</h3>
        <div class="font-medium text-sm flex items-center space-x-2 pt-3">
          <i class="fa-solid fa-envelope text-green-500"></i>
          <p class="text-green-500">info@brainlesslukas.xyz</p>
        </div>
        <div class="font-medium text-sm flex items-center space-x-2 pt-3">
          <i class="fa-solid fa-globe text-green-500"></i>
          <p class="text-green-500">brainlesslukas.xyz</p>
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