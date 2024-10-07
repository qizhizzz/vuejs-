<!-- src/components/TodoList.vue -->
<template>
    <div>
        <h1>待办事项列表</h1>
        <input v-model="newTodo" placeholder="添加新任务" @keyup.enter="addTodo" />
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                <input type="checkbox" :checked="todo.completed" @change="toggleTodo(index)" />
                <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
                <button @click="removeTodo(index)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const newTodo = ref('');

const todos = computed(() => store.getters.allTodos);

const addTodo = () => {
    if (newTodo.value.trim()) {
        store.commit('ADD_TODO', { text: newTodo.value, completed: false });
        newTodo.value = '';
    }
};

const removeTodo = (index) => {
    store.commit('REMOVE_TODO', index);
};

const toggleTodo = (index) => {
    store.commit('TOGGLE_TODO', index);
};

onMounted(() => {
    store.dispatch('fetchTodos');
});
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>