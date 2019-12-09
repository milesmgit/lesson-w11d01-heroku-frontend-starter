import React from 'react';
import './App.css';
import axios from 'axios';
// const databaseUrl = process.env.HEROKU_DB_URL || 'http://localhost:3000'
const databaseUrl = 'https://heroku-deployment-backend-77.herokuapp.com'

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    axios({
      url: `${databaseUrl}/api/users`,
      // url: 'https://project3-backend-test.herokuapp.com/api/users',
      method: 'get'
    })
      .then(users => {
        console.log(users)
        this.setState({ users })
      })
  }

  render() {
    console.log(this.state.users)
    console.log("Rendered")
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Project 3 Starter. Let's git it!</h1>
        </header>
      </div>
    );
  }
}

export default App;
