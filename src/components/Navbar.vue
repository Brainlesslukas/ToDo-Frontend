<template>
  <div class="flex justify-between items-center py-5 border-b-[1px] border-white">

    <div class="flex space-x-12 ml-16 font-extralight text-lg font-raleway text-white hidden md:block">
      <a href="https://taskify.brainlesslukas.xyz" class="relative inline-block pb-1 text-lg after:block after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:left-0 hover:after:w-full">
        Home
      </a>
      <a href="https://taskify.brainlesslukas.zyz/todo" class="relative inline-block pb-1 text-lg after:block after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:left-0 hover:after:w-full">
        ToDo's
      </a>
    </div>

    <div class="text-4xl flex items-center font-raleway text-white ml-8">
      <a class="font-light" href="https://taskify.brainlesslukas.xyz">Taskify</a>
      <img src="@/assets/Logo.webp" class="h-8 mr-2">
    </div>

    <div class="flex space-x-12 mr-16 font-extralight text-lg font-raleway text-white hidden md:block">
      <a href="https://taskify.brainlesslukas.xyz/login" class="relative inline-block pb-1 text-lg after:block after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:left-0 hover:after:w-full">
        Login
      </a>
      <a href="https://taskify.brainlesslukas.xyz/register" class="relative inline-block pb-1 text-lg after:block after:w-0 after:h-[0.5px] after:bg-white after:transition-all after:duration-300 after:left-0 hover:after:w-full">
        Register
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
