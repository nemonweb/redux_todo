import React, { Component } from 'react'
import FormContainer from '../container/FormContainer'
import TodoListContailer from '../container/TodoListContainer'

export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <FormContainer />
        <TodoListContailer />
      </div>
    )
  }
}
