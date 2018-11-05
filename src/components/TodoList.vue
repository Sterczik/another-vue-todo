<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <todo-item :todo="todo"></todo-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Todo } from '@/interfaces/Todo';
import TodoItem from '@/components/TodoItem.vue';

@Component({
  components: {
    TodoItem,
  },
})
export default class TodoList extends Vue {
  @Prop() public todos!: Todo[];
}
</script>
