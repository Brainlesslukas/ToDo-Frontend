<template>
  <ToDoCreateForm/>
  <ToDoGet/>
</template>

<script>
import ToDoCreateForm from "@/components/ToDoCreateForm.vue";
import ToDoGet from "@/components/ToDoGet.vue";

export default {
  name: 'ToDo',
  components: {
    ToDoCreateForm,
    ToDoGet
  }
}
</script>
