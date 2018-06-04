import React, { Component } from 'react'

export default class TodoItem extends Component {
  handleClick = () => {
    this.props.onClick && this.props.onClick(this.props.index)
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.text} {this.props.completed ? '+' : '-'}
      </li>
    )
  }
}
