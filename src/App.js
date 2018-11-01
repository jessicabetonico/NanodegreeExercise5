import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser.js'
import UserList from './UserList.js'
import Toggle from './Toggle.js'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/
class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      users: [],
      show: true
    }
  }
  
  addUser = (user) => {
    this.setState(oldUsers => ({
      users: [...oldUsers.users, user]
    }))    
  }
  changeToggle = (show) => {
    this.setState({
      show: show
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser onAddNewUser={this.addUser} userList={this.state.users}/>
		<Toggle onChangeToggle={this.changeToggle}/>	
        <UserList showPlayedGames={this.state.show} userList={this.state.users}/>
      </div>
    );
  }
}

export default App;
