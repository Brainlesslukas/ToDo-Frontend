<template>
  <div class="ml-40 pb-20">
    <h1 class="text-white text-6xl font-extralight font-raleway">
      Welcome to<span class="text-green-500 font-light"><br> Taskify</span>
    </h1>
    <h2 class="text-gray-200 text-lg font-extralight pt-5 font-raleway">
      Taskify is the ultimate solution to keep <br>your tasks structured and organized.<br>
      Manage your workflow efficiently, <br>stay productive, and never miss a deadline again.
    </h2>
    <div class="text-2xl mt-2 space-x-8 text-white">
      <a href="#">
        <i class="fa-brands fa-tiktok hover:text-pink-600"></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-discord hover:text-blue-900"></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-instagram hover:text-pink-600"></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-x-twitter hover:text-gray-500"></i>
      </a>
      <a href="#">
        <i class="fa-brands fa-github hover:text-green-500"></i>
      </a>
    </div>
    <div class="text-lg mt-4 space-x-8 text-white font-extralight font-raleway">
      <a href="#" class="text-green-500 relative inline-block pb-1 text-lg after:block after:w-0 after:h-[1px] after:bg-green-500 after:transition-all after:duration-300 after:left-0 hover:after:w-full">Learn More</a>
      <a href="#" class="text-green-500 relative inline-block pb-1 text-lg after:block after:w-0 after:h-[1px] after:bg-green-500 after:transition-all after:duration-300 after:left-0 hover:after:w-full">Register or Login</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
