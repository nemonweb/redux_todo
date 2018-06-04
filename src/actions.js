export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const addTodo = text => ({
  type: 'ADD',
  text
})
