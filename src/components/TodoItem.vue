<template>
  <div style="border-top: 1px solid #000; border-bottom: 1px solid #000">
    <h1>{{ todo.name }}</h1>
    <button @click="switchTodo(todo.id)">Switch</button>
    <h2>Completed: {{ todo.completed }}</h2>
    <button @click="removeTodo(todo.id)">Remove</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Todo } from '@/interfaces/Todo';

@Component
export default class TodoItem extends Vue {
  @Prop() private todo!: Todo;

  private switchTodo(todoId: number) {
    this.$store.dispatch('switchTodo', todoId);
  }

  private removeTodo(todoId: number) {
    this.$store.dispatch('removeTodo', todoId);
  }
}
</script>
