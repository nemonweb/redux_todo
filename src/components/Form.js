import React, { Component } from 'react'

export default class TodoItem extends Component {
  state = { value: '' }

  handleChange = e => this.setState({ value: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmitNew && this.props.onSubmitNew(this.state.value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">save</button>
      </form>
    )
  }
}
