<template>
  <div class="flex flex-col min-h-screen">

    <navbar class="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <Navbar />
    </navbar>

    <div class="relative">
      <Background />
    </div>

    <div class="mt-32 flex-1">
      <router-view />
    </div>

    <footer class="bg-white shadow-md">
      <Footer />
    </footer>

  </div>
</template>

<script>
import Background from "@/components/Background.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'app',
  components: {
    Background,
    Navbar,
    Footer
  }
}
</script>

