<template>
  <div class="mt-10 flex items-center">
    <Heading />
    <div class="mb-10 mt-10">
      <ToDoListHeading />
    </div>
  </div>
  <TodoStats />
</template>

<script>
import Heading from '@/components/Heading.vue';
import ToDoListHeading from '@/components/ToDoListHeading.vue';
import TodoStats from "@/components/TodoStats.vue";

export default {
  name: 'Home',
  components: {
    Heading,
    ToDoListHeading,
    TodoStats
  }
};
</script>
