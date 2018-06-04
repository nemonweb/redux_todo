import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Form from '../components/Form'

const mapDispatchToProps = (dispatch) => ({
  onSubmitNew: value => {
    dispatch(addTodo(value))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Form)
