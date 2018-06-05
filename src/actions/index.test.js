import * as actions from './index'
import * as types from '../actionTypes'

describe('actions', () => {
  describe('addTodo', () => {
    it('should create an action to add a todo', () => {
      const text = 'test'
      const expectedAction = {
        type: types.ADD_TODO,
        text
      }

      expect(actions.addTodo(text)).toEqual(expectedAction)
    })
  })

  describe('toggleTodo', () => {
    it('should create an action to toggle a todo', () => {
      const id = 1
      const expectedAction = {
        type: types.TOGGLE_TODO,
        id
      }

      expect(actions.toggleTodo(1)).toEqual(expectedAction)
    })
  })
})
