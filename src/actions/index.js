import { ADD_TODO, TOGGLE_TODO } from '../actionTypes'

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const addTodo = text => ({
  type: ADD_TODO,
  text
})
