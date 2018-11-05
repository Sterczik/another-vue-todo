<template>
  <div>
    <TodoList :todos="todos"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from '@/components/TodoList.vue';

@Component({
  components: {
    TodoList,
  },
})
export default class Home extends Vue {
  get todos() {
    return this.$store.getters.todos;
  }
}
</script>
