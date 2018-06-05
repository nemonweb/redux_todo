import React from 'react'
import TodoList from './index'

describe('TodoList', () => {
  const todos = [{ completed: false, text: 'text' }]
  const onClickHandler = jest.fn()

  it('should properly render self when has todos', () => {
    const wrapper = shallow(<TodoList todos={todos} onTodoClick={onClickHandler} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should properly render self when todos empty', () => {
    const wrapper = shallow(<TodoList todos={[]} onTodoClick={onClickHandler} />)
    expect(wrapper).toMatchSnapshot()
  })
})
