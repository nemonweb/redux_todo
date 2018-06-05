import React from 'react'
import TodoItem from './index'

describe('TodoItem', () => {
  it('should properly render self when completed false', () => {
    const wrapper = shallow(
        <TodoItem index={0} onClick={jest.fn()} text="xxx" completed={false} />
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('should properly render self when completed true', () => {
    const wrapper = shallow(
        <TodoItem index={0} onClick={jest.fn()} text="xxx" completed={true} />
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('should call onClick with prover attributes', () => {
    const onClickHandler = jest.fn()

    const wrapper = shallow(
      <TodoItem index={10} onClick={onClickHandler} text="xxx" completed={true} />
    );

    wrapper.props().onClick()
    expect(onClickHandler.mock.calls.length).toBe(1)
    expect(onClickHandler.mock.calls[0][0]).toBe(10)
  })
})
