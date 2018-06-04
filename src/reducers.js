import { ADD_TODO, TOGGLE_TODO } from './actionTypes'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }]
    case TOGGLE_TODO:
      return state.map(
        (item, index) =>
          index === action.id ? { ...item, completed: !item.completed } : item
      )
    default:
      return state
  }
}

const initialState = {
  todos: [
    { text: 'first task', completed: false },
    { text: 'second task', completed: true }
  ]
}

export default (state = initialState, action) => ({
  todos: todos(state.todos, action)
})
