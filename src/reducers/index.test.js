import reducer from './index'
import * as actions from '../actions'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      todos: [{ completed: false, text: 'first task' }]
    })
  })

  it('should handle ADD_TODO', () => {
    expect(reducer([], actions.addTodo('text'))).toEqual({
      todos: [{ completed: false, text: 'text' }]
    })

    const initialState = { todos: [{ completed: false, text: 'text 1' }] }
    expect(reducer(initialState, actions.addTodo('text 2'))).toEqual({
      todos: [
        { completed: false, text: 'text 1' },
        { completed: false, text: 'text 2' }
      ]
    })
  })

  it('should handle TOGGLE_TODO', () => {
    const initialState = {
      todos: [
        { completed: false, text: 'text 1' },
        { completed: false, text: 'text 2' }
      ]
    }

    expect(reducer(initialState, actions.toggleTodo(1))).toEqual({
      todos: [
        { completed: false, text: 'text 1' },
        { completed: true, text: 'text 2' }
      ]
    })
  })
})
