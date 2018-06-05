import React from 'react'
import TodoListContainer from './index'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe('TodoListContainer', () => {
  const mockStore = configureStore([])
  const initialState = { todos: [{ completed: false, text: 'xxx' }] }
  const store = mockStore(initialState)

  it('should properly render self with children', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TodoListContainer />
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should properly work callbacks', () => {
    const wrapper = shallow(<TodoListContainer store={store} />)
    wrapper.props().onTodoClick()
    expect(store.getActions()).toEqual([{ type: 'TOGGLE_TODO' }])
  })
})
