import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
