<template>
  <div class="flex flex-col justify-center items-center pb-5 pt-10 gap-y-5">

    <div class="flex justify-center gap-x-36 w-full">
      <div class="flex flex-col items-center">
        <h1 class="text-lg font-bold">Follow us</h1>
        <div class="text-2xl mt-2 space-x-4">
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
        </div>
      </div>

      <div class="flex flex-col items-center">
        <h1 class="text-lg font-bold">Contact</h1>
        <div class="text-lg font-normal">
          <a href="mailto:info@taskify.de">info@taskify.de</a>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <h1 class="text-lg font-bold">About us</h1>
        <p class="text-lg font-normal text-center">Taskify helps you organize your <br> tasks easily and efficiently.</p>
      </div>
    </div>

    <div class="w-full border-t border-gray-300 mt-4 mb-4"></div>

    <div class="flex justify-center items-center">
      <p class="text-gray-500 text-sm">©2025 Taskify. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
