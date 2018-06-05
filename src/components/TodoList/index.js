import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            text={item.text}
            completed={item.completed}
            onClick={this.props.onTodoClick}
          />
        ))}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
}
