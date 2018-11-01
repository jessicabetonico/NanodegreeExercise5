import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Toggle extends Component {
  static propTypes = {
   onChangeToggle : PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  handleShow = event => {
    const {onChangeToggle} = this.props
    let {show} = this.state
    this.setState({
      show: !show
    })
    onChangeToggle(!show)
  }
  render() {
    const {show} = this.state
    return (
      <button onClick={this.handleShow}> {show ? 
                                     'Hide the Number of Games Played' :
                                     'Show the Number of Games Played'}</button>
    )
  }
}

export default Toggle;