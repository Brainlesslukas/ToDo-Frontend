<template>
  <div class="flex items-center justify-center h-screen">
    <div class="transition-all duration-1000 ease-out" v-bind:class="{'opacity-0 translate-y-12': !isVisible, 'opacity-100 translate-y-0': isVisible}">
      <SignUpForm />
    </div>
  </div>
</template>

<script>
import SignUpForm from "@/components/Auth/SignUpForm.vue";

export default {
  name: 'SignUp',
  components: {
    SignUpForm
  },
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 200);
  }
};
</script>
