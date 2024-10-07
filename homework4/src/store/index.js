// src/store.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        todos: [] // 存储待办事项的数组
    },
    mutations: {
        ADD_TODO(state, todo) {
            state.todos.push(todo);
        },
        REMOVE_TODO(state, todoIndex) {
            state.todos.splice(todoIndex, 1);
        },
        TOGGLE_TODO(state, todoIndex) {
            const todo = state.todos[todoIndex];
            if (todo) {
                todo.completed = !todo.completed; // 切换已完成状态
            }
        }
    },
    actions: {
        // 模拟从服务器获取数据
        async fetchTodos({ commit }) {
            // 这里模拟一个异步操作
            const todos = await new Promise(resolve => {
                setTimeout(() => {
                    resolve([
                        { text: '学习 Vue.js', completed: false },
                        { text: '学习 Vuex', completed: false }
                    ]);
                }, 1000);
            });
            todos.forEach(todo => commit('ADD_TODO', todo));
        }
    },
    getters: {
        allTodos: state => state.todos,
        completedTodos: state => state.todos.filter(todo => todo.completed),
        activeTodos: state => state.todos.filter(todo => !todo.completed)
    }
});