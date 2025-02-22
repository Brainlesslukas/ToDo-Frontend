<template>
  <div class="flex flex-col justify-center items-center pb-5 pt-10 gap-y-5 text-white border-t-[1px] border-green-500">

    <div class="flex flex-col md:flex-row justify-center gap-x-36 w-full font-raleway">

      <div class="flex flex-col items-center">
        <h1 class="text-lg font-normal">Follow us</h1>
        <div class="text-2xl mt-2 space-x-4 p-3">
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
      </div>

      <div class="flex flex-col items-center">
        <h1 class="text-lg font-normal">Contact</h1>
        <div class="text-m font-extralight pt-3">
          <a href="mailto:info@taskify.de">info@taskify.de</a>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <h1 class="text-lg font-normal">About us</h1>
        <p class="text-m font-extralight pt-3 text-center">Taskify helps you organize your <br> tasks easily and efficiently.</p>
      </div>
    </div>

    <div class="w-full border-t border-green-500 mt-4 mb-4"></div>

    <div class="flex flex-col justify-center items-center pt-7 space-y-2">
      <p class="text-gray-500 text-sm">Coded with <span><i class="fa-solid fa-heart text-lg text-red-600"></i></span> by brainlesslukas</p>
      <p class="text-gray-500 text-sm">©2025 Taskify. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
