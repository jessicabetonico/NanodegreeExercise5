import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class AddUser extends Component {
  static propTypes = {
    onAddNewUser: PropTypes.func.isRequired,
    userList: PropTypes.array.isRequired
  }
  constructor(props){
    super(props)
    this.state = {
      userName: '',
      firstName: '',
      lastName: '',
      playedGames: 0,
      duplicated: ''
    }
  }
  
  someFieldEmpty = () => {
    const {userName, firstName, lastName} = this.state
    return (userName === '' || 
             firstName === '' || 
              lastName === '')
  }

  addUser = (event) => {
    event.preventDefault();
    const {onAddNewUser, userList} = this.props
    const {userName, firstName, lastName, playedGames} = this.state
    const userNameEqual = userList.filter(user => user.userName === userName)
    if (userNameEqual.length === 0){
      onAddNewUser({firstName, lastName, userName, playedGames})
      this.setState({
        duplicated: '',
        userName: '',
        firstName: '',
        lastName: ''        
      })
    }else{
      this.setState({
        duplicated: 'Username already exists'
      })
    }
    
  }
  
  handleChange = (event, state) => {
    this.setState({
      [state]: event.target.value
    })
  }

  render(){
    const {duplicated} = this.state
    return(
      <div>
         <form onSubmit={this.addUser}>
           <input 
                 type='text'
                 placeholder='Enter the First Name'
                 value={this.state.firstName}
                 onChange={(event) => this.handleChange(event, 'firstName')}
           />
           <input 
                 type='text'
                 placeholder='Enter the Last Name'
                 value={this.state.lastName}
                 onChange={(event) => this.handleChange(event, 'lastName')}
           />
           <input 
                 type='text'
                 placeholder='Enter the Nick Name'
                 value={this.state.userName}
                 onChange={(event) => this.handleChange(event, 'userName')}
           />
			<p>{duplicated}</p>
		   <button disabled={this.someFieldEmpty()}>Add</button>
       	 </form>
      </div>
    )
  }
}
export default AddUser;