import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const App = {
  data() {
    return {
      title: '',
      todos: [
        // {id:nanoid(), title: "abc"},
        // {id:nanoid(), title: "abddfasdc"}
      ],
  
    }
  },
  methods: {
    addTodo() {
      if (!this.title.trim()) {
        return
      }
      this.todos.push({
        id: nanoid(),
        title: this.title
      })
      this.title =''
    },
    editMode() {
      this.title = ''
    },
    deleteTodo(todoToDelete) {
      const index = this.todos.findIndex(todo => todo.id === todoToDelete.id)
      this.todos.splice(index, 1) //몇번째 인덱스 번호에서 몇개를 지우겠다.
    },
    
  }
  
  
}

//이름이 대문자인 변수는 컴포넌트인걸로!!
const Todoitem ={
  template: /*HTML*/`
  <li>
    <span v-if="!editMode">{{ todo.title }}</span>
    <input v-else v-model="todo.title" />
    <button v-if="!editMode" @click="onEditMode">수정!</button>
    <button v-else @click="offEditMode">확인!</button>
    <button @click="deleteTodo">삭제!</button>
  </li>
  `,
  porps: {
    todo: Object
  },
  data() {
    return {
      title: '컴포넌트', // 이 title은 Todoitem 컴포넌트 내부에서만 슬 수 있다!
      editMode: false
    }
  },
  methods: {
    onEditMode() {
      this.editMode = true
    },
    deleteTodo() {
      this.editMode = false
    }
  }
}

const app = Vue.createApp(App)
app.component('todo-item', Todoitem)
app.mount('#app')
