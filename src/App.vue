<template>
  <div class="flex flex-col min-h-screen">

    <navbar class="fixed top-0 left-0 w-full z-10 backdrop-blur shadow-md">
      <Navbar />
    </navbar>

    <div class="relative">
      <Background />
    </div>

    <CSAlert class="z-20"/>

    <div class="mt-20 flex-1 mb-20">
      <router-view />
    </div>

    <footer class="bg-[#0D1B12] shadow-md">
      <Footer />
    </footer>

  </div>
</template>

<script>
import Background from "@/components/Background.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import CSAlert from "@/components/Alerts/CSAlert.vue";

export default {
  name: 'app',
  components: {
    Background,
    Navbar,
    Footer,
    CSAlert
  }
}
</script>

