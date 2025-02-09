<template>
    <div class="relative z-10 text-black">
      <Test />
      <a href="/todoweb/src/views/Register" class="block">SignUp</a>
      <a href="/todoweb/src/views/Login" class="block">Login</a>
    </div>
</template>

<script>
import Test from '@/components/Test.vue';
import Background from "@/components/Background.vue";

export default {
  name: 'Home',
  components: {
    Test,
    Background
  }
}
</script>
