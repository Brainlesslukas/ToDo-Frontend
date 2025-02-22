<template>
  <div class="mt-10 flex items-center justify-center gap-x-6 mb-10">
    <Heading />
    <div class="hidden md:block toDoList">
      <ToDoListHeading />
    </div>
  </div>
  <TodoStats />
  <Team />
</template>


<script>
import Heading from '@/components/Heading.vue';
import ToDoListHeading from '@/components/ToDoListHeading.vue';
import TodoStats from "@/components/TodoStats.vue";
import Team from "@/components/Team.vue";

export default {
  name: 'Home',
  components: {
    Heading,
    ToDoListHeading,
    TodoStats,
    Team
  }
};
</script>

<style>
.toDoList {
  display: none;
}

@media (min-width: 768px) {
  .toDoList {
    display: block;
  }
}

</style>
