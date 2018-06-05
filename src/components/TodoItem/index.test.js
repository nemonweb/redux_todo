import React from 'react'
import TodoItem from './index'

describe('components', () => {
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
  })
})
